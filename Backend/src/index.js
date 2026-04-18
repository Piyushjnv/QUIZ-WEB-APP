import app from "./app.js";
import connectdb from "./db/DataBase.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" })


connectdb()
    .then(() => {

            app.listen(process.env.PORT || 3000, () => {
                console.log(`server running at , http://localhost:${process.env.PORT || 3000}`)
            });
            app.on("error", (error) => {
                console.error("Error starting the server:", error);
            });
       })
    .catch((error) => {
        console.log(error, "Error connecting to the database");
    })