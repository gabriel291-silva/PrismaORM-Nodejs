export class AppError{
    public readonly menssage:string
    public readonly statusCode:Number

    constructor(menssage:string,statuscode = 400 ){
        this.menssage = menssage;
        this.statusCode = statuscode
    }
}