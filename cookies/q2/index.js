const express = require('express');
const path = require('path');
const app = express()
const session = require('express-session')
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: 'user info'
}))

app.use((req,res,next)=>{
    if(!req.session.info){
        req.session.info = []
    }
    next();
})

app.get('/',(req,res)=>{
    let date = new Date();
    let hour = date.getHours();
    let resposs = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href=${hour >=6 && hour<=18 ? `/css/day.css`:`/css/night.css`} rel="stylesheet">
        <title>Document</title>
    </head>
    <body>
        <form action='/result' method='POST'>
            <label>Name <input type='text' name='name'></label>
            <label>Age <input type='text' name='age'></label>
            <input type='submit' value='submit query'></label>
        </form>
    </body>
    </html>`

    res.send(resposs)
})

app.post('/result', (req, res) => {
    console.log(req.body.name)
    req.session.info[0] = req.body.age;
    req.session.info[1] = req.body.name;
    res.redirect(303,`/output`)    
});

app.get('/output',(req,res)=>{

    if(!req.session.info){
        req.session.info['person'] = 18;
    }
    res.send(`Welcome ${req.session.info[1]} age ${req.session.info[0]}`)
});

app.use('/css', express.static(path.join(__dirname,'css')))
app.listen(3000)

