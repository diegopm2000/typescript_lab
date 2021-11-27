import { User } from "../../entities/user";
import { CreateUserRequestModel } from "./createUser.requestModel";
import { CreateUserResponseModel } from "./createUser.responseModel";
import { UserRepositoryInterface } from "../user.repository.interface";
import { UuidGeneratorInterface } from "../uuid.generator.interface";

export class CreateUserInteractor {

    private _userRepository: UserRepositoryInterface
    private _uuidGenerator: UuidGeneratorInterface

    constructor(userRepository: UserRepositoryInterface, uuidGenerator: UuidGeneratorInterface) {
        this._userRepository = userRepository
        this._uuidGenerator = uuidGenerator
    }

    async run(createUserRequestModel: CreateUserRequestModel): Promise<CreateUserResponseModel> {

        const id = this._uuidGenerator.generate()

        const newUser = new User(id, createUserRequestModel.email, createUserRequestModel.phone, createUserRequestModel.nick)

        const userUpdated = await this._userRepository.update({ id: newUser.id }, newUser)

        const createUserResponseModel: CreateUserResponseModel = {
            id: userUpdated.id,
            email: userUpdated.email,
            phone: userUpdated.phone,
            nick: userUpdated.nick,
        }

        return createUserResponseModel
    }
}