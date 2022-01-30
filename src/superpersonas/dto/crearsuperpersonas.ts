import { Field, InputType } from "@nestjs/graphql";
import { MaxLength} from "class-validator";
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