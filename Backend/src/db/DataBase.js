import moongose from "mongoose"
import{ DB_Name }from '../constants.js';

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectdb = async ( ) =>{
    try {
        const connectionInstance = await moongose.connect(`${process.env.MONGODB_URL}`)
        console.log('db connect ');
        
            // await moongose.connection.db.admin().command({ ping: 1 });
    } catch (error) {
        console.error(` error at DB file  ${error} `)
          process.exit(1);
    }
    // finally {
    // // Ensures that the client will close when you finish/error
    // await moongose.disconnect();
  // }
}


export default connectdb