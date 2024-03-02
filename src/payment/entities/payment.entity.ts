
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
export class Payment extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectId;
    
    @Column()
    payment_type:string

    @Column()
    total_value:number

    @Column()
    user_id:string

    @Column()
    project_id:string

    @Column()
    implication:number

    @Column()
    footprint_id:string

    @Column()
    state:string

    @Column()
    compensation_amount:number

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
