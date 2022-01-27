import { Field, InputType } from "@nestjs/graphql";
import { Length, MaxLength } from "class-validator";

@InputType()
export class CrearSuperpersonas {
    @Field()
    @MaxLength(100)
    nombre!: string;

    @Field({nullable:true})
    ciudad_de_residencia?: string;

   //@Field()
   // caracteristicas: Caracteristicas[];
}