//importation
const express=require("express");

//creation of instance

const app = express();

//.env
require ("dotenv").config();

//connect DB
const connect=require("./config/connectDB");
connect();
//Json
app.use(express.json())

//route global
app.use("/api/user",require("./routes/user"))
app.use("/api/admin",require("./routes/admin"))

// creation of server

const port=process.env.PORT;
app.listen(port,error=>{
    error?console.log(error):console.log(`The server is running on port:${port}`)
})
