import { applyDecorators, UseGuards } from '@nestjs/common';
import { Role } from '../common/enums/role.enum';
import { AuthGuard } from '../auth/guard/auth.guard';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Roles } from './roles.decorator';
import { ApiKeyGuard } from '../auth/guard/authorization/api-key.guard';

export function Auth(role: Role) {
    return applyDecorators(Roles(role), UseGuards(AuthGuard, RolesGuard));
  }
  
  export function ApiKey() {
    return applyDecorators(UseGuards(ApiKeyGuard));
  }
  