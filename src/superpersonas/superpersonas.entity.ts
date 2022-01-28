import { Field, Int, ObjectType } from "@nestjs/graphql";
import { type } from "os";
import { Column, Connection, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { EmbeddedMetadata } from "typeorm/metadata/EmbeddedMetadata";
import { Caracteristicas} from "./migration/caracteristicas";


@ObjectType()
@Entity()
export class Superpersonas{

    /*Dada la finalidad y estructura del proyecto se decide utilizar el propio nombre como PrimaryKey en lugar de un ID numérico
    autoincremental. De esta manera, nos saltamos parte de la lógica fundamental de las BBDD relacionales, pero
    ahorraremos tiempo en futuros pasos al trabajar directamente con el nombre como valor único en lugar de con un ID y un campo
    con la caracterísitca "unique".
    */
    @Field()
    @PrimaryColumn()
    nombre!: string;

    @Field({nullable:true})
    @Column({nullable:true})
    ciudad_de_residencia?: string;

    @Field(type => Caracteristicas)
    @Column(()=> Caracteristicas)
    caracteristicas!: Caracteristicas;
}
