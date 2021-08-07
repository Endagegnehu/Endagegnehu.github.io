const express = require('express');
const path = require('path');
const { report } = require('process');
const app = express()

app.use('/result',express.urlencoded({extended:false}));

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
    res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`)    
});

app.get('/output',(req,res)=>{
    let name = req.query.name
    let age = req.query.age
    if(!name){
        name = 'person';
    }
    if(!age){
        age = 18;
    }
    res.send(`Welcome ${name} age ${age}`)
});

app.use('/css', express.static(path.join(__dirname,'css')))
app.listen(3000)

