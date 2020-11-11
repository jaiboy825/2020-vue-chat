const express = require('express');
const http = require('http');
const path = require('path');
const {pool} = require('./DB/DB');
const {ss} = require('./DB/credential');

const app = new express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use( express.static( path.join(__dirname, 'public') ) );

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:ss
}));

app.post('/api/login', async (req, res)=>{
    const {email, password} = req.body;
    let sql = "SELECT * FROM users WHERE email = ? AND password = PASSWORD(?)";
    let result = await pool.query(sql, [email, password]);
    if(result[0].length === 0){
        res.json({success:false, msg:'로그인 실패, 아이디와 비밀번호 확인'});
    }else{
        //여기에 로그인 처리가 들어간다.
        res.json({success:true, msg:'로그인 성공'});
    }
});

app.post('/api/register', async (req, res)=>{
    let result = await pool.query("SELECT * FROM users WHERE email = ?",
                                                     [req.body.email]);
    if(result[0].length !== 0 ) {
        res.json({msg:'중복된 회원이 있습니다.',success:false});
        return;
    }
    const {email, name, password} = req.body;
    let sql = "INSERT INTO users (name, email, password, level)"
                + " VALUES (?, ?, PASSWORD(?), ?)";
    await pool.query(sql, [name, email, password, 1])
    res.json({msg:'회원가입 완료', success:true});
});

app.get('/', (req, res)=>{
    res.render('main');
});


server.listen(54000, ()=>{
    console.log("서버가 54000포트에서 구동중입니다.");
});