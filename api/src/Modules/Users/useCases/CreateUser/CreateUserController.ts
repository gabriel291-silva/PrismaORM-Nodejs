import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase"

export class CreateUserController {
    async handle(req:Request,res:Response){
        console.log("teste createUserControler")
        console.log("body", req.body)
        const {name, email} = req.body

        const createUseCase = new CreateUserUseCase();

        const result = await createUseCase.execult({name,email});

        return res.status(201).json(result)
    }
}