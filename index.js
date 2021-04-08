const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/pricing', (req, res) => {
    res.render('pricing');
});

const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));