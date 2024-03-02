import { Body, Controller, HttpCode, HttpStatus, Post, Get, Req } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { AuthService } from "./auth.service";
import { Role } from 'src/common/enums/role.enum';
import { Auth } from 'src/decorators/auth.decorator';
import { ApiTags } from "@nestjs/swagger";
@ApiTags('Auth')
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(@Body() registerDto:RegisterDto) {
    console.log(registerDto)
    return this.authService.register(registerDto);
  }
  @Auth(Role.CLIENTE)
  @Get('loginWithToken')
  async loginWithToken(@Req() req: Request){
    const id = req['user'].id
    console.log('entre a la funcion',id)
    return await this.authService.loginWithToken(id)
  }
  @HttpCode(HttpStatus.OK)
  @Post("login")
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

}