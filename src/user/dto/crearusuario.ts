import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@InputType()
export class CrearUsuario{

    @Field({nullable:true})
    usuario: string;

    @Field({nullable:true})
    password: string;
}
