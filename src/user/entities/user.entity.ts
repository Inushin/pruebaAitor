import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class UserPrueba{

    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field({nullable:true})
    @Column({unique:true,nullable:true})
    usuario: string;

    @Field({nullable:true})
    @Column({nullable:true})
    password: string;
}
