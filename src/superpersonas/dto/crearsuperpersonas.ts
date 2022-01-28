import { Field, InputType, Int } from "@nestjs/graphql";
import { Length, Max, MaxLength, Min } from "class-validator";
import { type } from "os";
import { Caracteristicas } from "../migration/caracteristicas";

@InputType()
export class CrearSuperpersonas {
    @Field()
    @MaxLength(100)
    nombre!: string;

    @Field({ nullable: true })
    ciudad_de_residencia?: string;


    @Field(type => Caracteristicas)
    caracteristicas: Caracteristicas;
}