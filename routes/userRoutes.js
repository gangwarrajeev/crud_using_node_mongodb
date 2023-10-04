const express = require('express')
const router  = express.Router();
const {getUsers,getUserDetails,updateUserDetails,deleteUser,createUser} = require("../controllers/UserController")

router.route("/").get(getUsers).post(createUser)
router.route("/:id").get(getUserDetails).put(updateUserDetails).delete(deleteUser);

// router.route("/:id").put(updateUserDetails);
// router.route("/:id").post(createUser);
// router.route("/:id").delete(deleteUser);
module.exports = router;