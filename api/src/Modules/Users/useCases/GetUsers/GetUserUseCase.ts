import { GetUserDto } from "Modules/Users/dtos/GetUserDto"
import {prisma} from "../../../../Prisma/client"


export class GetUserUseCase {
    async execult({id}:GetUserDto){
        return   prisma.user.findUnique({where:{id}})
    }
}