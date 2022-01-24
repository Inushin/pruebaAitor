import { Field, Int, ObjectType } from "@nestjs/graphql";
import { type } from "os";

@ObjectType()
export class Superpersonas {
    @Field()
    nombre!: string;

    @Field({nullable:true})
    ciudad_de_residencia?: string;

   //@Field()
    caracteristicas: Caracteristicas[];
}

@ObjectType()
export class Caracteristicas {
        @Field(type => Int)
        fuerza!: number;
        @Field(type => Int)
        inteligencia!: number;
        @Field(type => Int)
        salud!: number;
        //@Field()
        tipo: TipoPersona[];
        @Field(type => Boolean)
        activo!: Boolean;
}

@ObjectType()
export class TipoPersona
{
moral!: string;
}