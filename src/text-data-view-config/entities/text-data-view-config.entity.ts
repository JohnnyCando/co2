import { ObjectId } from 'mongodb';
import {
    UpdateDateColumn,
    CreateDateColumn,
    Column,
    Entity,
    BaseEntity,
    ObjectIdColumn,
    Unique,
  } from 'typeorm';
@Entity()
export class TextDataViewConfig extends BaseEntity{
    @ObjectIdColumn()
    id: ObjectId;
    
    @Column()
    name:string
    @Column()
    identify_lang_text_view_id:string
    @Column()
    lang:string
    @Column()
    description_text:string
    @Column()
    type_string:string

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
