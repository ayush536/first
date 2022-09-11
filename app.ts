import { Router } from "./src/router/router";

let router = new Router();

router.app.listen(8089, ()=>{
    console.log('listning to port http://localhost:8080')
})