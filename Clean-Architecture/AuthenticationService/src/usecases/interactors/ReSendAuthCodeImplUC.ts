import { AuthCode } from "../../entities/AuthCode";
import { AuthCodeType } from "../../entities/AuthCodeType";
import { Phone } from "../../entities/Phone";
import { ReSendAuthCode } from "../ports/input/ReSendAuthCodeUC";
import { AuthCodeRepository } from "../ports/output/AuthCodeRepository";
import { Filter } from "../ports/output/Filter";
import { SecurityHelper } from "../ports/output/SecurityHelper";
import { ErrorsUC } from "../shared/Errors";

type Params = {
    email?: string,
    phone?: Phone,
    authCodeType: AuthCodeType
}

export class ReSendAuthCodeImplUC implements ReSendAuthCode {

    private _authCodeRepository: AuthCodeRepository
    private _securityHelper: SecurityHelper

    constructor (authCodeRepository: AuthCodeRepository, securityHelper: SecurityHelper) {
        this._authCodeRepository = authCodeRepository
        this._securityHelper = securityHelper
    }

    async execute({ email, phone, authCodeType }: Params): Promise<boolean> {
        // Check that only email or phone was informed
        if (email != null && phone != null) {
            throw new Error(ErrorsUC.ERROR_BOTH_FIELDS_ARE_NOT_ALLOWED)
        }

        const authCodeFound = await this._authCodeRepository.getOne(new Filter({ email, type: authCodeType }))
        if (!authCodeFound) {
            throw new Error(ErrorsUC.ERROR_AUTHCODE_NOT_FOUND_TO_RESEND)
        }

        const codeDecrypted = this._securityHelper.decryptAuthCode(authCodeFound.code)

        // TODO - emitir evento de reenvio de código

        return true
    } 

}