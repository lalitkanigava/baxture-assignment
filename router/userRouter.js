const express = require("express")
const router = express.Router()
const {
    getAllusers,
    getUserById,
    createUser,
    updateUser,
    deleteUser} = require("../controllers/user")

router.route("/").get(getAllusers).post(createUser)
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser)

module.exports = router