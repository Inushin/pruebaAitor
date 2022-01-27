import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RemovePersonas {
    @Field()
    nombre: string;

    @Field({nullable:true})
    ciudad_de_residencia?: string;

   //@Field()
   // caracteristicas: Caracteristicas[];
}