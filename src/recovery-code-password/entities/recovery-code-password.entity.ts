import { ApiProperty } from "@nestjs/swagger";
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
export class RecoveryCodePassword extends BaseEntity{

    @ApiProperty({
        example: 'pruebaDePrimavera-Dani',
      })
        @ObjectIdColumn()
        id: ObjectId;

        @Column()
        token:string

        @Column()
        user_id:string

        @Column()
        user_email:string
      
        @Column()
        expire_at: Date = new Date(Date.now() + 1000 * 60 * 15);

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
