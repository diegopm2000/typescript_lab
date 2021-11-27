import { UserRepositoryInterface } from "../user.repository.interface"
import { UpdateUserRequestModel } from "./updateUser.requestModel"
import { UpdateUserResponseModel } from "./updateUser.responseModel"

export class UpdateUserInteractor {

    private _userRepository: UserRepositoryInterface

    constructor(userRepository: UserRepositoryInterface) {
        this._userRepository = userRepository
    }

    async run(updateUserRequestModel: UpdateUserRequestModel): Promise<UpdateUserResponseModel> {

        const filter = updateUserRequestModel.filter
        const data = updateUserRequestModel.user

        const userUpdated = await this._userRepository.update(filter, data)

        const createUserResponseModel: UpdateUserResponseModel = {
            id: userUpdated.id,
            email: userUpdated.email,
            phone: userUpdated.phone,
            nick: userUpdated.nick,
        }

        return createUserResponseModel
    }
}