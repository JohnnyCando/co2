import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";
import { CreateUserDto } from "./create-user.dto";
import { PartialType } from '@nestjs/mapped-types';
export class UpdateAppUserDto extends PartialType(CreateUserDto){
}