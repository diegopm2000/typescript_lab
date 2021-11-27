import { UserRepositoryInterface } from "../user.repository.interface"
import { GetManyUserRequestModel } from "./getManyUser.requestModel"
import { GetManyUserResponseModel } from "./getManyUser.responseModel"

export class GetManyUserInteractor {

    private _userRepository: UserRepositoryInterface

    constructor(userRepository: UserRepositoryInterface) {
        this._userRepository = userRepository
    }

    async run(getManyUserRequestModel: GetManyUserRequestModel): Promise<GetManyUserResponseModel> {

        const filter = getManyUserRequestModel

        const userListFound = await this._userRepository.getMany(filter)

        const getOneUserResponseModel: GetManyUserResponseModel = userListFound

        return getOneUserResponseModel
    }
}