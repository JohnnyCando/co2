import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class UpdatePasswordApp {

  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/, {
    message: 'La contraseña debe contener al menos 1 mayúscula, 1 minúscula y 1 número, y tener al menos 8 caracteres.',
  })
  password: string;
}