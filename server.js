require("dotenv").config({path:"./src/.env"})
const app = require("./src/app")
const DB = require("./src/Database/db")


DB();

app.listen(45, () => {
    console.log("app is running on PORT 45");
    console.log("connecting to DB....");
})