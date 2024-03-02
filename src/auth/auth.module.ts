import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserService } from "src/user/user.service";
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: 'SVvwdDTvEtWG1IfQ0rO9lAMB3FCM05ro',
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,UserService],
})
export class AuthModule {}
