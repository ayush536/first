import { UserServices } from "../services/userServices";
const express = require('express');

export class Router{
    public app:any;
    constructor(){
        this.app = express()
        this.app.use(express.json())
        this.app.get('/',UserServices.getData)
        this.app.post('/',UserServices.postData)
    }
}