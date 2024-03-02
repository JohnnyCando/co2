import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const apiKey = request.headers['x-api-key']; // give the name you want
    if (!apiKey || apiKey !== process.env.API_KEY) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
