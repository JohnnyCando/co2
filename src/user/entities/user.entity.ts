import { ObjectId } from 'mongodb';
import { Role } from '../../common/enums/role.enum';
import {
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  Entity,
  BaseEntity,
  ObjectIdColumn,
  Unique,
  BeforeInsert,
} from 'typeorm';
@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column()
  role: string;

  @CreateDateColumn({
    select: true,
    name: 'created_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @UpdateDateColumn({
    select: true,
    name: 'updated_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @BeforeInsert()
  setDefaultValues() {
    // Establecer el valor por defecto para 'defaultField' si no está definido
    if (!this.role) {
      this.role = Role.CLIENTE;
    }
  }
}
