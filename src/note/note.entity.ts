import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('note')

export class Note extends BaseEntity
{
@PrimaryGeneratedColumn()
id:any;

@ApiProperty()
@Column()
text:any;

@ApiProperty()
@Column()
is_completed: any;

//@Column()
//email:string;
//@Column()
//Address:string;

//@Column()
//email:string;

}