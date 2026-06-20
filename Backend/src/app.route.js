import app from './app.js'
import user from "./routes/user.router.js"
import visit from "./routes/util.router.js"

app.use("/user", user)
app.use("/visit", visit)


export default app 
