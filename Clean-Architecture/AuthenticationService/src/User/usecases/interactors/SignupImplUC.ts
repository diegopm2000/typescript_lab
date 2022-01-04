import { Uuid } from "../../../Shared/entities/Uuid";
import { AuthCodeType } from "../../entities/AuthCodeType";
import { CustomerData } from "../../entities/CustomerData";
import { Phone } from "../../entities/Phone";
import { Role } from "../../entities/Role";
import { User } from "../../entities/User";
import { SignupUC } from "../ports/input/SignupUC";
import { AuthCodeRepository } from "../ports/output/AuthCodeRepository";
import { Filter } from "../ports/output/Filter";
import { MnemonicHelper } from "../ports/output/MnemonicHelper";
import { UserRepository } from "../ports/output/UserRepository";
import { AuthPayloadWithMnemonics } from "../shared/AuthPayloadWithMnemonics";
import { ErrorsUC } from "../shared/Errors";

export class SignupImplUC implements SignupUC {

    private _userRepository: UserRepository
    private _authCodeRepository: AuthCodeRepository
    private _mnemonicHelper: MnemonicHelper

    constructor(userRepository: UserRepository, authCodeRepository: AuthCodeRepository, mnemonicHelper: MnemonicHelper) {
        this._userRepository = userRepository
        this._authCodeRepository = authCodeRepository
        this._mnemonicHelper = mnemonicHelper
    }

    async execute(email: string, phone: Phone, emailAuthCode: string, phoneAuthCode: string, productionMode: boolean): Promise<AuthPayloadWithMnemonics> {
        // TODO check las propiedades de entrada...no se si hacerlo aquí o en otra funcion previa
        
        const authCodeFoundByEmail = await this._authCodeRepository.getOne(new Filter({ email, type: AuthCodeType.REGISTER }))
        if (!authCodeFoundByEmail) {
            throw new Error(ErrorsUC.ERROR_AUTHCODE_NOT_FOUND)
        }

        const authcodeFoundByPhone = await this._authCodeRepository.getOne(new Filter({ phone: phone.toString(), type: AuthCodeType.REGISTER }))
        if (!authcodeFoundByPhone) {
            throw new Error(ErrorsUC.ERROR_AUTHCODE_NOT_FOUND)
        }

        const id = Uuid.random()
        const mnemonicsStr = this._mnemonicHelper.creteMnemonics()
        const hashedMnemonics = this._mnemonicHelper.toHashedArray(mnemonicsStr)
        const customerData = new CustomerData(hashedMnemonics, phone)
        const roles = [Role.CUSTOMER]

        const newUser = new User({ id, email, roles, customerData })

        // TODO - Check if there is a user with the same email & phone registered in the system

        await this._userRepository.save(newUser)

        await this._authCodeRepository.removeById(authCodeFoundByEmail.id);
        await this._authCodeRepository.removeById(authcodeFoundByPhone.id);

        const authPayloadWithMnemonics = new AuthPayloadWithMnemonics(id, email, roles, mnemonicsStr)

        // TODO emit event of signup -> creo que es mejor emitir los eventos justo siempre al final del todo, por si se produce algun fallo

        return authPayloadWithMnemonics
    }
}