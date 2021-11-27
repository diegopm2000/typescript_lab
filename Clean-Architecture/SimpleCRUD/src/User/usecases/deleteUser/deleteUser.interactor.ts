import { DeleteUserResponseModel } from "./deleteUser.responseModel"
import { UserRepositoryInterface } from "../user.repository.interface"
import { DeleteUserRequestModel } from "./deleteUser.requestModel"

export class DeleteUserInteractor {

    private _userRepository: UserRepositoryInterface

    constructor(userRepository: UserRepositoryInterface) {
        this._userRepository = userRepository
    }

    async run(deleteUserRequestModel: DeleteUserRequestModel): Promise<DeleteUserResponseModel> {

        const filter = deleteUserRequestModel
        
        const resultDeletion = await this._userRepository.deleteOne(filter)

        const deleteUserResponseModel: DeleteUserResponseModel = resultDeletion

        return deleteUserResponseModel
    }
}