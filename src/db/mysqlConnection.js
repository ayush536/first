"use strict";
exports.__esModule = true;
exports.mysqlConnection = void 0;
var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ayush@123",
    insecureAuth: true
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log('Connected!');
});
exports.mysqlConnection = con;
