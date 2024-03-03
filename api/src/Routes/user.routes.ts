import { GetUserController } from "../Modules/Users/useCases/GetUsers/GetUserController";
import { CreateUserController } from "../Modules/Users/useCases/CreateUser/CreateUserController";
import { Router } from "express";

const userRoutes = Router();

const createUserControler = new CreateUserController()
const getUserController = new GetUserController()

console.log("teste  user routes")

userRoutes.post("/", createUserControler.handle)
userRoutes.get("/", getUserController.handle)

export {userRoutes} 