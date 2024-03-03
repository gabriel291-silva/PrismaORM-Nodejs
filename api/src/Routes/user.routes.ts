import { CreateUserController } from "../Modules/Users/useCases/CreateUser/CreateUserController";
import { Router } from "express";

const userRoutes = Router();

const createUserControler = new CreateUserController()

console.log("teste  user routes")

userRoutes.post("/", createUserControler.handle)

export {userRoutes} 