const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
 const date = new Date();
 let hour = date.getHours();
 
    res.render("index", {
    time: date.toTimeString(),
    css: hour >=6 && hour<=18 ? `../css/day.css`:`../css/night.css` 
     });
});
app.use('/css', express.static(path.join(__dirname, 'css')));
app.listen(3000);