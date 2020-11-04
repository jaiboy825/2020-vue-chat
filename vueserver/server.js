const express = require('express');
const http = require('http');
const path = require('path');

const app = new express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use( express.static( path.join(__dirname, 'public') ) );

app.get('/', (req, res)=>{
    res.render('main');
});

server.listen(54000, ()=>{
    console.log("서버가 54000포트에서 구동중입니다.");
});