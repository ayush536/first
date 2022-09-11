"use strict";
exports.__esModule = true;
exports.UserServices = void 0;
var mysqlConnection_1 = require("../db/mysqlConnection");
var UserServices = /** @class */ (function () {
    function UserServices() {
    }
    //POST DATA
    UserServices.postData = function (req, res) {
        var data = req.body;
        mysqlConnection_1.mysqlConnection.query('INSERT INTO sample1.details SET?', data, function (err, results, fields) {
            if (err)
                throw err;
            res.status(200).json(results);
        });
    };
    //GET DATA
    UserServices.getData = function (req, res) {
        mysqlConnection_1.mysqlConnection.query('SELECT * FROM sample1.details', function (err, results, fields) {
            if (err)
                throw err;
            return res.send(results);
        });
    };
    return UserServices;
}());
exports.UserServices = UserServices;
