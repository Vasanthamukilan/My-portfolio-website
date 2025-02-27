const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl');
const QRCode = require('qrcode');
const app = express();

// Corrected connection string
mongoose.connect('mongodb://localhost:27017/urlShortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// Main page route with baseUrl passed to EJS
app.get('/', async (req, res) => {
  let newShort = null;
  if (req.query.new) {
    newShort = await ShortUrl.findOne({ short: req.query.new });
  }
  res.render('index', { newShort: newShort, baseUrl: req.protocol + '://' + req.get('host') });
});

// Create short URL
app.post('/shortUrls', async (req, res) => {
  const { fullUrl, customShort, expiresAt } = req.body;
  
  let expiresDate;
  if (expiresAt) {
    expiresDate = new Date(expiresAt);
  } else {
    // Set default expiration to 7 days from now
    expiresDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  }
  
  // Build the data object without forcing the "short" value.
  // If customShort is provided, add it; otherwise, let Mongoose use its default.
  const data = { full: fullUrl, expiresAt: expiresDate };
  if (customShort) {
    data.short = customShort;
  }
  
  const newShortUrl = await ShortUrl.create(data);
  res.redirect(`/?new=${newShortUrl.short}`);
});

// Redirect short URL
app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (!shortUrl) return res.sendStatus(404);

  if (shortUrl.expiresAt && new Date() > shortUrl.expiresAt) {
    return res.status(410).send('This URL has expired!');
  }

  shortUrl.clicks++;
  await shortUrl.save();
  res.redirect(shortUrl.full);
});

// Generate QR code
app.get('/generate-qr/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (!shortUrl) return res.sendStatus(404);

  const fullShortUrl = `${req.protocol}://${req.get('host')}/${shortUrl.short}`;
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(fullShortUrl);
    res.send(qrCodeDataUrl);
  } catch (err) {
    res.status(500).send('Error generating QR code');
  }
});

// Stats page
app.get('/stats', async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render('stats', { shortUrls: shortUrls });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
