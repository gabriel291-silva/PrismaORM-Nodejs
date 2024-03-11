import { DeleteEntradaController } from "../Modules/Entradas/userCases/DeleteEntrada/DeleteEntradaController";
import { CreateEntradaController } from "../Modules/Entradas/userCases/CreateEntrada/CreateEntradaController";
import { FindManyEntradaController } from "../Modules/Entradas/userCases/FindManyEntrada/FindManyController"
import { Router } from "express";

const entradaRoutes = Router();

const createEntradaControler = new CreateEntradaController()
const findManyEntradaControler = new FindManyEntradaController()
const deleteEntradaController  = new DeleteEntradaController()


console.log("teste  entrada routes")

entradaRoutes.post("/", createEntradaControler.handle)
entradaRoutes.get("/all",findManyEntradaControler.handle)
entradaRoutes.delete("/",deleteEntradaController.handle)

export {entradaRoutes}  