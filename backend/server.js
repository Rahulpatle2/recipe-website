import app from "./src/app.js";
import connect from "./src/db/db.js";
import dotenv from "dotenv"

dotenv.config();
connect();

const port = process.env.PORT || 3000

app.listen(port,() =>{
    console.log("server is running on port 3000")
})