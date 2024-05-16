const { log } = require('console');
let express = require('express');
let app = express();
let path = require('path');

app.get('/', function(req, res) {
    console.log('__dirname is',__dirname)
    let absolutePath = path.join(__dirname, 'views', 'index.html');
    console.log('absolutePath',absolutePath)
    res.sendFile(absolutePath);
});

app.use('/public', express.static(path.join(__dirname, 'public')));































 module.exports = app;
