import { Filter } from "../filter.type"
import { UserRepositoryInterface } from "../user.repository.interface"
import { CountRequestModel } from "./count.requestModel"
import { CountResponseModel } from "./count.responseModel"

export class CountInteractor {
    
    private _userRepository: UserRepositoryInterface

    constructor(userRepository: UserRepositoryInterface) {
        this._userRepository = userRepository
    }

    public async run(countRequestModel: CountRequestModel): Promise<CountResponseModel> {
        const filter: Filter = countRequestModel

        return this._userRepository.count(filter)
    }
}