import { Field, InputType } from "@nestjs/graphql";
import { MaxLength } from "class-validator";
import { Caracteristicas } from "../migration/caracteristicas";

@InputType()
export class UpdatePersonas {
    @Field()
    @MaxLength(100)
    nombre: string;

    @Field({nullable:true})
    ciudad_de_residencia?: string;

    @Field(type => Caracteristicas, {nullable:true})
    caracteristicas?: Caracteristicas;

}