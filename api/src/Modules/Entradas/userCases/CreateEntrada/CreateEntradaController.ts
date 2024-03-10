import { Request, Response } from "express"
import { CreateEntradaUseCase } from "./CreateEntradaUseCase"

export class CreateEntradaController {
    async handle(req:Request,res:Response){
        console.log("teste createEntradaControler")
        console.log("body", req.body)
        const {name, description, value} = req.body

        const createUseCase = new CreateEntradaUseCase();

        const result = await createUseCase.execult({name, description, value});

        return res.status(201).json(result)
    }  
}