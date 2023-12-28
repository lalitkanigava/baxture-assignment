const usersObject = require("../users") 
const {v4: uuidv4} = require("uuid")

const getAllusers = (req, res) => {

    res.status(200).json({users:usersObject})
}

const getUserById = (req, res) => {
    res.send("user by id")
}

const createUser = (req, res) => {

    res.send("create user")
}

const updateUser = (req, res) => {
    res.send("update user")
}

const deleteUser = (req, res) => {
    res.send("delete user")
}

module.exports = {
    getAllusers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}