require("dotenv").config()
const express = require("express")
const app = express()
const userRouter = require("./router/userRouter")

app.use(express.json())

app.use("/api/users", userRouter)

const port = process.env.PORT || 4000

const start = () =>{
    app.listen(port, () => {
        console.log(`app running on port ${port}`)
    })
}

start()