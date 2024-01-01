const router = require("express").Router();
const userController = require("../controllers/userController");

// DELETE USER

router.delete("/:id", userController.deleteUser);

router.get("/:id", userController.getUser);

module.exports = router;
