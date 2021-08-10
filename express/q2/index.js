const express = require('express');
const path = require('path')
const app = express();
app.use("/result",express.urlencoded({extended:false}));

app.set('view engine', 'ejs');


var wizards = ['Hermione', 'Neville', 'Gandalf', 'Radagast'];

app.get('/', (req, res) => {
    res.render('index',{
        wizards: wizards
    })
});

app.get('/add',(req, res) =>{
        res.render('form',{})
    }
)

app.post('/result', (req, res) => {
    let name = req.body.name;
    wizards.push(name);
    res.redirect(303,'/')
});
app.listen(3000);