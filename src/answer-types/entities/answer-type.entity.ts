
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
import {
    UpdateDateColumn,
    CreateDateColumn,
    Column,
    Entity,
    BaseEntity,
    ObjectIdColumn,
  } from 'typeorm';

@Entity()
export class AnswerType extends BaseEntity {
  @ApiProperty({
    example: 'pruebaDePrimavera-Dani',
    description: 'the job name given by user',
  })
    @ObjectIdColumn()
    id: ObjectId;
    @Column()
    name:string

    @Column()
    description:string

    @CreateDateColumn({
        select:true,
        name: 'created_at',
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP',
      })
      created_at: Date;

    @UpdateDateColumn({
        select:true,
        name: 'updated_at',
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP',
      })
      updated_at: Date;
}
