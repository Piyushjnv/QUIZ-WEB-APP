import app from './app.js'
import user from "./routes/user.router.js"
import visit from "./routes/util.router.js"
import forgetpass from "./routes/forgetpass.js"

app.use("/user", user)
app.use("/visit", visit)
app.use("/forgetpassword", forgetpass)


export default app 
