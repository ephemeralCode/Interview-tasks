const express = require('express');
const app = express();
const sendMail = require('./sendEmail');

app.use(express.static('./', {root: __dirname}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/registration', (req, res) => {
    sendMail(req.body.email, req.body.login, req.body.pass);

    res.status(200).redirect('/');
});

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
});

app.listen(5000, () => console.log('server online'));