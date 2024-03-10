import { FindManyEntradaDto } from "Modules/Entradas/dtos/FindManyEntradaDto";
import {prisma} from "../../../../Prisma/client"
import { error } from "console";


export class FindManyEntradaUseCase {
    async execult({name}:FindManyEntradaDto){

        try{
            return await prisma.entrada.findMany({where : { name : {equals : name}}})

        }catch{ 
            throw error
        }
    }
}