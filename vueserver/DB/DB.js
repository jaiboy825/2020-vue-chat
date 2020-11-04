const mysql = require('mysql2');
const {c} = require('./credential');

//jsp connection pool
// Driver.getConnection
const pool = mysql.createPool(c);
//js 비동기 언어, ECMA2015(Promise)