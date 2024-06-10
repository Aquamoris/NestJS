import {IsString} from "class-validator";

export class CreateUserDTO {
    @IsString()
    name: string

    @IsString()
    userName: string

    @IsString()
    email: string

    @IsString()
    password: string
}