import moongose from "mongoose"
import DB_Name from '../constants.js';

const connectdb = async ( ) =>{
    try {
        const connectionInstance = await moongose.connect(`${Process.env.MONGODB_URL}/${DB_Name}`)

    } catch (error) {
        console.error(` error at DB file  ${error} `)
          process.exit(1);
    }
}


export default connectdb