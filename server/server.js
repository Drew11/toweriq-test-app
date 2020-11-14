const data = require('./users');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', `http://localhost:3000`);
    res.header("Content-Type",'application/json');
    next();
});

app.get('/users', function (req, res) {
    res.send(JSON.stringify(data));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});