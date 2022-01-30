import { Field, InputType } from "@nestjs/graphql";
import { MaxLength } from "class-validator";
import { CaracteristicasInput } from "./caractertisticasinput";

@InputType()
export class RemovePersonas {
    @Field()
    @MaxLength(100)
    nombre: string;

    @Field({nullable:true})
    ciudad_de_residencia?: string;

    @Field({nullable:true})
    caracteristicas?: CaracteristicasInput;

}