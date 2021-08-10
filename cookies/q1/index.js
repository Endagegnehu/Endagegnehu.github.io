const express = require('express')
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.get('/',(req,res)=>{
    let form = `<ul>`;  
    for (let key in req.cookies) {
        form += `<li>Key: ${key} Value: ${req.cookies[key]} </li>`
        }
        form += `</ul>`
        form  += `<form action="add" method="POST">
                    <input type="text" name = "key">
                    <input type="text" name ="value">
                    <input type="submit" value="add">
                    </fom>`
    res.send(form)
})

app.post('/add',(req,res)=>{
        res.cookie(req.body.key,req.body.value); 
    res.redirect(303, '/')
})
app.listen(3000)