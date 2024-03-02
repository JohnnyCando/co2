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
export class FootprintHistory extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    country_id:string

    @Column()
    user_id:string

    @Column()
    footprint_glossary:JSON[]

    @Column()
    payment_id:string

    @Column()
    pay_at:Date

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
