import { Field, InputType, Int } from "@nestjs/graphql";
import { Length, Max, MaxLength, Min } from "class-validator";
import { type } from "os";
import { Caracteristicas } from "../migration/caracteristicas";
import { CaracteristicasInput } from "./caractertisticasinput";

@InputType()
export class CrearSuperpersonas {
    @Field()
    @MaxLength(100)
    nombre!: string;

    @Field({ nullable: true })
    ciudad_de_residencia?: string;


    @Field()
    caracteristicas: CaracteristicasInput;
}