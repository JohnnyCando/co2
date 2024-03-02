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
export class FootprintCategory extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    labels: JSON[]

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
 
