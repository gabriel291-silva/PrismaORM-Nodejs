import { Router } from "express";
import { userRoutes as userRoutesUser } from "./user.routes";
import { entradaRoutes as userRoutesEntrada } from "./entrada.routes";


const routes = Router()

routes.use("/users", userRoutesUser);
routes.use("/entradas", userRoutesEntrada)

export  {routes}