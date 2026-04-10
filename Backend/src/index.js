import app from "./app.js";
import connectdb from "./db/DataBase.js";


connectdb().then(
    ()=> {
        
    })

try {
    connectdb()
    app.listen(3000, () => {
      console.log(`server running at , http://localhost:3000`)});
} catch (error) {
    console.log(error, "message ")
}