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
export class Project extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectId;
    
    @Column()
    title:string
    @Column()
    identify_lang_project_id:string
    @Column()
    category:string
    @Column()
    slogan:string
    @Column()
    lang:string
    @Column()
    image_background:string
    @Column()
    description_project:string
    @Column()
    location:number[];
    @Column()
    email:string
    @Column()
    fields_dynamics:JSON[]
    @Column()
    is_active:boolean
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
