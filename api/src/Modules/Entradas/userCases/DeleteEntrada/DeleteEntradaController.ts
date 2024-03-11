import { Request, Response } from "express"
import { DeleteEntradaUseCase } from "./DeleteEntradaUseCase";

export class DeleteEntradaController {
    async handle(req:Request,res:Response){

        const { id } = req.body;

        const deleteEntradaUseCase = new DeleteEntradaUseCase()

        const result = await deleteEntradaUseCase.execult({id})

        return res.status(201).json(result)
    }
}