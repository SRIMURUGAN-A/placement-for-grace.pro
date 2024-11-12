const express = require('express');
const path = require('path');
const app = express();

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(express.static(path.join(__dirname, '../public')));
app.set("view engine", 'ejs');

app.set('views', path.join(__dirname, '../views'));




app.get('/', (req, res) => {
    res.render("login");
});

app.get('/register', (req, res) => {
    res.render("register");
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'home.html'));
});

app.get('/apptitute', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/apptitute', 'appti.html'));
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
