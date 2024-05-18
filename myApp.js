const { log } = require('console');
let express = require('express');
let app = express();
let path = require('path');
require('dotenv').config()

app.get('/', (req, res) => {
    console.log('__dirname is',__dirname)
    let absolutePath = path.join(__dirname, 'views', 'index.html');
    console.log('absolutePath',absolutePath)
    res.sendFile(absolutePath);
});

app.get('/json',(req,res)=>{
    const messageStyle = process.env.MESSAGE_STYLE;
    let message = "Hello json";
    if(messageStyle === 'uppercase'){
        message = message.toUpperCase()
    }
    res.json({"message": message})
})

app.use('/public', express.static(path.join(__dirname, 'public')));



























 module.exports = app;
