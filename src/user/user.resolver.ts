import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CrearUsuario } from './dto/crearusuario';
import { UserPrueba } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(of => UserPrueba)
export class UserResolver {
    constructor(private userService: UserService) { }


    /*
        @Query(returns => [UserPrueba])
    user(): Promise<UserPrueba[]> {
        return this.userService.findAll();
    }

    @Query(returns => Superpersonas)
    getSuperpersona(@Args('nombre') nombre:string):Promise<Superpersonas>
    {
        return this.superpersonasService.findOne(nombre);
    }
    */

    @Mutation(() => UserPrueba, { name: "CrearUsuario" })
    create(@Args('creacionUsuario') user: CrearUsuario):Promise<UserPrueba> {
        return this.userService.create(user);
    }
    
    
}
