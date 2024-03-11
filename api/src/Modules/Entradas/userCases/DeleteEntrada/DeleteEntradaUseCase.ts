import { DeleteEntradaDto } from "Modules/Entradas/dtos/DeleteEntradaDto";
import {prisma} from "../../../../Prisma/client"
import { error } from "console";

export class DeleteEntradaUseCase {
    async execult({id}:DeleteEntradaDto){
        try{
            console.log(id)
            return await prisma.entrada.delete({where:{id}})
        } catch{
            console.error('Erro ao deletrar entrada:', error);
        }
    }
}  