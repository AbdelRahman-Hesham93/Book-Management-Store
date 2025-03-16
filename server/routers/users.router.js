const router = require("express").Router();
const usersControllers = require("../controllers/user.controller");
const middleware = require("../middleware/auth");

router.get("/api/users/", middleware, usersControllers.allUsers);
router.post("/api/users/register", usersControllers.register);
router.post("/api/users/login", usersControllers.login);
router.put("/api/users/:id", usersControllers.edit);

module.exports = router;
