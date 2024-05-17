const { log } = require('console');
let express = require('express');
let app = express();
let path = require('path');

app.get('/', (req, res) => {
    console.log('__dirname is',__dirname)
    let absolutePath = path.join(__dirname, 'views', 'index.html');
    console.log('absolutePath',absolutePath)
    res.sendFile(absolutePath);
});

app.get('/json',(req,res)=>{
    res.json({"message": "Hello json"})
})

app.use('/public', express.static(path.join(__dirname, 'public')));



























 module.exports = app;
