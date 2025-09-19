var express = require('express');
const fs = require('fs').promises;
const path = require('path');

var router = express.Router();

const filePath = 'public/images/urls.txt';

let imgs = [];

async function readUrls() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const urls = data.split(/\r?\n/).map(url => url.trim()).filter(url => url !== '');
    return urls;
  } catch (err) {
    console.error('Error al leer el archivo:', err);
  }
}

readUrls().then(urls => {
  imgs = urls;
}).catch(error => {
  console.error('Error:', error);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { imgs: imgs });
});

module.exports = router;
