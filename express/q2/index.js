const express = require('express');
const app = express();
app.use("/result",express.urlencoded({extended:true}));


var wizards = ['Hermione', 'Neville', 'Gandalf', 'Radagast'];

// Setup the HTML string
var html = '';

// Loop through each wizard and create a list item
wizards.forEach(function (wizard) {
// += adds an item to the existing value
// It's the same as writing this:
// html = html + '<li>' + wizard + '</li>';
html += '<li>' + wizard + '</li>';
});

// Wrap items in an unordered list
html = '<ul>' + html + '</ul>';
html = html + '<a href="/add"> '+ 'add' + '</a>'
app.get('/', (req, res) => {
    res.send(html);
});

app.get('/add',(req, res) =>{
        let show = ` <form action='/result' method='POST'>
        <label>Add wizard <input type='text' name='name'></label>
        <input type='submit' value='submit query'></label>
    </form>`
    res.send(show)
    }
)

app.post('/result', (req, res) => {
    let name = req.body.name;
    // var wizards = ['Hermione', 'Neville', 'Gandalf', 'Radagast'];

    wizards.push(name);
// Setup the HTML string
var htmlin = '';

// Loop through each wizard and create a list item
wizards.forEach(function (wizard) {
// += adds an item to the existing value
// It's the same as writing this:
// htmlin = htmlin + '<li>' + wizard + '</li>';
htmlin += '<li>' + wizard + '</li>';
});

// Wrap items in an unordered list
htmlin = '<ul>' + htmlin + '</ul>';
htmlin = htmlin + '<a href="/add"> '+ 'add' + '</a>'

    res.send(htmlin);
});
app.listen(3000);