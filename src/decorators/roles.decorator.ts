import { SetMetadata } from '@nestjs/common/decorators';
import { Role } from 'src/common/enums/role.enum';

export const ROLES_KEY = 'roles';
export const Roles = (role) => SetMetadata(ROLES_KEY, role);
