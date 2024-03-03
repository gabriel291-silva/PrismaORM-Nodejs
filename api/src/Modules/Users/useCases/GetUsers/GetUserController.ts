import { Request, Response } from "express"
import { GetUserUseCase } from "./GetUserUseCase"

export class GetUserController {
    async handle(req:Request,res:Response){
        const {id} = req.body

        const getUserUseCase = new GetUserUseCase();

        const result = await getUserUseCase.execult({id});

        return res.status(201).json(result)
    }
}