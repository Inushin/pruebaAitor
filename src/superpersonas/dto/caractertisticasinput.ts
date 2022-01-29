import { Field, InputType, Int } from "@nestjs/graphql";
import { Max, Min } from "class-validator";
import { Column } from "typeorm";

export enum Tipos {
    Superheroe = "superheroe",
    Villano = "villano",
}

@InputType("CaracteristicasInput")
export class CaracteristicasInput {
    @Field(type => Int)
    @Min(0)
    @Max(100)
    fuerza!: number;

    @Field(type => Int)
    @Min(0)
    @Max(100)
    inteligencia!: number;

    @Field(type => Int)
    @Min(0)
    @Max(100)
    salud!: number;

    tipos: Tipos[]

    @Field(type => Boolean)
    activo!: boolean;

}