import { User } from "../models/user";
import { mysqlConnection } from "../db/mysqlConnection";

export class UserServices{

    //POST DATA

    public static postData(req:any, res:any){
        const data = req.body
        mysqlConnection.query('INSERT INTO sample1.details SET?',data, (err :Error, results: any, fields: any)=>{
            if(err) throw err;
            res.status(200).json(results)
        })
    }

    //GET DATA

    public static getData(req:any, res:any){
        mysqlConnection.query('SELECT * FROM sample1.details',function (err:Error, results:any, fields:any) {
            if(err) throw err;
            return res.send(results)
        })
    }
}