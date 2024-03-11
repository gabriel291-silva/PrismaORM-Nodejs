import { Request, Response } from "express"
import { FindManyEntradaUseCase } from "./FindManyEntradaUseCase"

export class FindManyEntradaController {
    async handle(req:Request,res:Response){
        console.log("teste createEntradaControler")
        console.log("body", req.body)
        const {name} = req.body

        const FindManyUseCase = new FindManyEntradaUseCase();

        const result = await FindManyUseCase.execult({name});

        console.log( { result})

        return res.status(201).json(result)
    }  
}