import { Transform,Type } from "class-transformer";
import { IsEmail, IsString, Matches, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/, {
    message: 'La contraseña debe contener al menos 1 mayúscula, 1 minúscula y 1 número, y tener al menos 8 caracteres.',
  })
  password: string;
}