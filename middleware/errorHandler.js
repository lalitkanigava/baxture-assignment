const customAPIErrors = require("../error/customError")

const customErrorHandlerMiddleware = (err, req, res, next) => {

if(err instanceof customAPIErrors){
    return res.status(err.statusCodes).json({msg: err.message})
}

res.status(500).send("Something Went wrong")

}

module.exports = customErrorHandlerMiddleware