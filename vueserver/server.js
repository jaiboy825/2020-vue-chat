const express = require('express');
const http = require('http');
const path = require('path');
const {pool} = require('./DB/DB');

const app = new express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use( express.static( path.join(__dirname, 'public') ) );

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.render('main');
});

app.get('/test', async (req, res)=>{
    let r = await pool.query("SELECT * FROM dummy");
    res.json(r[0]);
});

app.post('/data', async (req, res)=>{
    //req.body.title
    //let r = await pool.query("select * from dummy");
    //res.json(r[0])
});

server.listen(54000, ()=>{
    console.log("서버가 54000포트에서 구동중입니다.");
});