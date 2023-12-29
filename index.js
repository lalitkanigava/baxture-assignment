require("dotenv").config()
const express = require("express")
const app = express()
const userRouter = require("./router/userRouter")
const notFound = require("./middleware/notFound")
const customErrorHandlerMiddleware = require("./middleware/errorHandler")
app.use(express.json())

app.use("/api/users", userRouter)
app.use(notFound)
app.use(customErrorHandlerMiddleware)

const port = process.env.PORT || 4000

const start = () =>{
    app.listen(port, () => {
        console.log(`app running on port ${port}`)
    })
}

start()