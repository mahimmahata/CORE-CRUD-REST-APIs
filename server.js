require("dotenv").config({path:"./src/.env"})
const app = require("./src/app")


app.listen(3000, () => {
    try{
        console.log("server is running on PORT 3000");
        console.log("connecting to DB....");
    }catch (err){
        console.error("faild to connecting DB",err)
    }
})