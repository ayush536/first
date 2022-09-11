"use strict";
exports.__esModule = true;
exports.Router = void 0;
var userServices_1 = require("../services/userServices");
var express = require('express');
var Router = /** @class */ (function () {
    function Router() {
        this.app = express();
        this.app.use(express.json());
        this.app.get('/', userServices_1.UserServices.getData);
        this.app.post('/', userServices_1.UserServices.postData);
    }
    return Router;
}());
exports.Router = Router;
