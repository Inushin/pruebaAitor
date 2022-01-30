import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CrearUsuario } from './dto/crearusuario';
import { UserPrueba } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(of => UserPrueba)
export class UserResolver {
    constructor(private userService: UserService) { }


    @Mutation(() => UserPrueba, { name: "CrearUsuario" })
    create(@Args('creacionUsuario') user: CrearUsuario): Promise<UserPrueba> {
        return this.userService.create(user);
    }


}
