import express from "express"
import { getAllUser, login, register } from "../controller/userController.js"


const UserRoutes = express.Router()


UserRoutes.post("/register",register)
UserRoutes.post("/login",login)
UserRoutes.get("/users",getAllUser)

export default UserRoutes