import { CreateEntradaDto } from "Modules/Entradas/dtos/CreateEntradaDto";
import {prisma} from "../../../../Prisma/client"
import { error } from "console";


export class CreateEntradaUseCase {
    async execult({name,description,value}:CreateEntradaDto){

        // const UserAlredyExist = await prisma.user.findUnique({where: {email:email}})

        // if(UserAlredyExist) {
        //     throw null
        // }
        try{
            return await prisma.entrada.create({ data:{name,description,value}})

        }catch{ 
            throw error
        }
    }
}