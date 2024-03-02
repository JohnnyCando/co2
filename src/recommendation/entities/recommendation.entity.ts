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
export class Recommendation extends BaseEntity{

    @ApiProperty({
        example: 'pruebaDePrimavera-Dani',
      })
        @ObjectIdColumn()
        id: ObjectId;
        @Column()
        name:string
        
        @Column()
        identify_lang_recommended_id:string
    
        @Column()
        lang:string

        @Column()
        description:string

        @Column()
        background_image:string

        @Column()
        impact:JSON
    
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
