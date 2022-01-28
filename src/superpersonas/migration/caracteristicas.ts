import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Max, Min } from "class-validator";
import { Column, Entity } from "typeorm";


export enum Tipos {
    Superheroe = "superheroe",
    Villano = "villano",
}
@InputType("CaracteristicasInput")
@Entity()
@ObjectType()
export class Caracteristicas {
    @Field(type => Int)
    @Column({ type: "smallint", default: 0 })
    @Min(0)
    @Max(100)
    fuerza!: number;

    @Field(type => Int)
    @Column({ type: "smallint", default: 0 })
    @Min(0)
    @Max(100)
    inteligencia!: number;

    @Field(type => Int)
    @Column({ type: "smallint",  default: 0 })
    @Min(0)
    @Max(100)
    salud!: number;


    @Column({ type: "enum", enum: Tipos, default: Tipos.Superheroe })
    tipos: Tipos[]


    @Field(type => Boolean)
    @Column({ default: true })
    activo!: Boolean;

}