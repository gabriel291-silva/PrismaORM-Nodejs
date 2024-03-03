import { CreateUserDto } from "Modules/Users/dtos/CreateUserDto";
import {prisma} from "../../../../Prisma/client"


export class CreateUserUseCase {
    async execult({name, email}:CreateUserDto){
        console.log("teste CreateUserUseCase")

        const UserAlredyExist = await prisma.user.findUnique({where: {email:email}})

        if(UserAlredyExist) {
            throw null
        }

        return await prisma.user.create({
            data:{
                Name:name,
                email:email
            }})
    }
}