const express= require("express");
const authControllers = require("../controller/auth-controller");

const router = express();

router.route("/").get(authControllers.home);

router.route("/register").post(authControllers.register);

router.route("/login").post(authControllers.login);


module.exports=router;