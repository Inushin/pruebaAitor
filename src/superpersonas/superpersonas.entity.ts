import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Max, Min } from "class-validator";
import { validate } from "graphql";
import { type } from "os";
import { min } from "rxjs";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { EmbeddedMetadata } from "typeorm/metadata/EmbeddedMetadata";

@ObjectType()
@Entity()
export class Superpersonas {
    @Field()
    @PrimaryColumn()
    nombre!: string;

    @Field({nullable:true})
    @Column({nullable:true})
    ciudad_de_residencia?: string;
/*
    @Field(type => Int)
    @Column({type:"smallint", default:0})
    @Min(0)
    @Max(100)
    fuerza!: number;

    @Field(type => Int)
    @Column({type:"smallint", default:0})
    @Min(0)
    @Max(100)
    inteligencia!: number;

    @Field(type => Int)
    @Column({type:"smallint", default:0})
    @Min(0)
    @Max(100)
    salud!: number;

    /*
    ENUM CON DOS VALORES "Superheroe" y "Villano"
    @Field()
    tipo: string;
*//*
    @Field(type => Boolean)
    @Column({default:true})
    activo!: Boolean;
*/
}