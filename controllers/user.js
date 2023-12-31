const usersObject = require("../users") 
const {v4: uuidv4} = require("uuid")
const customAPIErrors = require("../error/customError")

const getAllusers = (req, res) => {
    res.status(200).json({users:usersObject})
}

const getUserById = (req, res) => {

    const userId = req.params.id

    if(!uuidv4(userId)){
        throw new customAPIErrors(`Invalid ID ${userId}`, 400)
    }

    const user = usersObject.find((itretion) =>  itretion.id === userId)
    
    if(!user){
        throw new customAPIErrors('UserId not found', 404)
    }
    
    res.status(200).json({user})

}

const createUser = (req, res) => {

    const {username, age, hobbies} = req.body

    if(!username || !age || !hobbies){
        throw new customAPIErrors("Required fileds missing", 400);
    }
    const newUser = {
        "id" : uuidv4(),
        username,
        age,
        hobbies
    }

    usersObject.push(newUser)
    
    res.status(201).json({user:newUser})
}

const updateUser = (req, res) => {

    const userId = req.params.id

    if(!uuidv4(userId)){
        throw new customAPIErrors(`Invalid ID ${userId}`, 400)
    }
    
    const userIndex = usersObject.findIndex((itretion) =>  itretion.id === userId)           
    
    if(userIndex === -1){
        throw new customAPIErrors('User not found', 404)
    }

    const {username, age, hobbies} = req.body

    usersObject[userIndex] = {
        "id": userId,
        "username": username || usersObject[userIndex]['username'],
        "age": age || usersObject[userIndex]['age'],
        "hobbies": hobbies || usersObject[userIndex]['hobbies'],
    }    

    res.status(200).json(usersObject[userIndex])
    
}

const deleteUser = (req, res) => {

    const userId = req.params.id

    if(!uuidv4(userId)){
        throw new customAPIErrors(`Invalid ID ${userId}`, 400)
    }

    const userIndex = usersObject.findIndex((itretion) =>  itretion.id === userId)    
    
    if(userIndex === -1){
        throw new customAPIErrors('User not found', 404)
    }

    usersObject.splice(userIndex, 1)

    res.status(204).json({msg:"User deleted successfully."})
}

module.exports = {
    getAllusers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}