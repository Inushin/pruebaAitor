import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdatePersonas {
    @Field()
    nombre: string;

    @Field({nullable:true})
    ciudad_de_residencia?: string;

   //@Field()
   // caracteristicas: Caracteristicas[];
}