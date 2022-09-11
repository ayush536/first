"use strict";
exports.__esModule = true;
var router_1 = require("./src/router/router");
var router = new router_1.Router();
router.app.listen(8089, function () {
    console.log('listning to port http://localhost:8080');
});
