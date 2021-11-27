/* eslint-disable @typescript-eslint/no-unused-vars */

import { User } from "../../entities/user";
import { UserInterface } from "../../entities/user.interface";
import { Filter } from "../../usecases/filter.type";
import { UserRepositoryInterface } from "../../usecases/user.repository.interface";

export class UserRepositoryMock implements UserRepositoryInterface {

    public async getOne(filter: Filter): Promise<UserInterface> {
        return new User('1mocked', 'mockedUser@mail.com', '+34666666666', 'mockedUser')
    }

    public async getMany(filter: Filter): Promise<Array<UserInterface>> {
        return [
            new User('1mocked', 'mocked1User@mail.com', '+34666666666', 'mocked1User'), 
            new User('2mocked', 'mocked2User@mail.com', '+34666666665', 'mocked2User'), 
        ]
    }

    public async update(filter: Filter, user: UserInterface): Promise<UserInterface> {
        return new User('1mocked', 'mockedUser@mail.com', '+34666666666', 'mockedUser')
    }

    public async deleteOne(filter: Filter): Promise<boolean> {
        return true
    }
    public async count(filter: Filter): Promise<number> {
        return 2
    }
}