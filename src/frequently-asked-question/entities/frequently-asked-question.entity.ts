
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
export class FrequentlyAskedQuestion extends BaseEntity{

    @ApiProperty({
        example: 'pruebaDePrimavera-Dani',
      })
        @ObjectIdColumn()
        id: ObjectId;
        @Column()
        title:string
        
        @Column()
        identify_lang_frequently_question_id:string
    
        @Column()
        lang:string
        @Column()
        order_number:number
        @Column()
        answer:string
    
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
