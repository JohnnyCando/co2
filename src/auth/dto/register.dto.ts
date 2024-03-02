import { Transform } from "class-transformer";
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class RegisterDto {
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  name: string;
  @Transform(({ value }) => value.toLowerCase())
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/, {
    message: 'La contraseña debe contener al menos 1 mayúscula, 1 minúscula y 1 número, y tener al menos 8 caracteres.',
  })
  password: string;
}
