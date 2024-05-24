const { log } = require('console');
let express = require('express');
let app = express();
let path = require('path');
require('dotenv').config()
let bodyParser = require('body-parser')



const logger = (req, res, next)=> {
    const method = req.method
    const path = req.path
    const ip = req.ip

    console.log(`${method} ${path} - ${ip}`);
    next();
  }
  
app.use(logger)
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    //console.log('__dirname is',__dirname)
    let absolutePath = path.join(__dirname, 'views', 'index.html');
    //console.log('absolutePath',absolutePath)
    res.sendFile(absolutePath);
});

app.get('/:word/echo',(req,res)=>{
  console.log(req.params)
  let {word} = req.params
  console.log(word)
  res.json({echo: word})
})

app.get('/json',(req,res)=>{
    const messageStyle = process.env.MESSAGE_STYLE;
    let message = "Hello json";
    if(messageStyle === 'uppercase'){
        message = message.toUpperCase()
    }
    res.json({"message": message})
})

app.get('/now',(req, res, next)=> {
    req.time = new Date().toString()
    next();
  }, (req, res)=>{
    res.json({time: req.time});
  })

app.route('/name')
.get((req,res)=> {
  const {first: firstname,last:lastname} = req.query
  
  res.json({ name: `${firstname} ${lastname}`})
  })

/* app.get('/name',(req,res)=> {
const {first: firstname,last:lastname} = req.query

res.json({ name: `${firstname} ${lastname}`})
}) */

app.use('/public', express.static(path.join(__dirname, 'public')));



 module.exports = app;
