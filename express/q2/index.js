const express = require('express');
const path = require('path')
const app = express();
const cookies = require('cookie-parser')
app.use("/result",express.urlencoded({extended:false}));

app.set('view engine', 'ejs');

app.use(cookies())

app.use((req,res,next)=>{
    if(req.cookies.info !== undefined){
        req.cookies.info = []
    }
    next();
})

app.get('/', (req, res) => {
    console.log(req.cookies.info);
    if (req.cookies.info !== undefined) {
        res.render('index',{
            wizards: req.cookies.info
        })
    }else{
        res.render('index',{
            wizards:[]
        })
    }

});

app.get('/add',(req, res) =>{
        res.render('form',{})
    }
)

app.post('/result', (req, res) => {
    let name = req.body.name;
    console.log(name);
    req.cookies.info.push(name);
    res.redirect(303,'/')
});
app.listen(3000);