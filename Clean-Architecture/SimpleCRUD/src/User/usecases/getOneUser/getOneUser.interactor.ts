import { UserRepositoryInterface } from "../user.repository.interface"
import { GetOneUserRequestModel } from "./getOneUser.requestModel"
import { GetOneUserResponseModel } from "./getOneUser.responseModel"

export class GetOneUserInteractor {

    private _userRepository: UserRepositoryInterface

    constructor(userRepository: UserRepositoryInterface) {
        this._userRepository = userRepository
    }

    async run(getOneUserRequestModel: GetOneUserRequestModel): Promise<GetOneUserResponseModel> {

        const filter = getOneUserRequestModel

        const userFound = await this._userRepository.getOne(filter)

        const getOneUserResponseModel: GetOneUserResponseModel = {
            id: userFound.id,
            email: userFound.email,
            phone: userFound.phone,
            nick: userFound.nick,
        }

        return getOneUserResponseModel
    }
}