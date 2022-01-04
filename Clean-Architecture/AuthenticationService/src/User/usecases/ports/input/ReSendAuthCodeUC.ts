import { AuthCodeType } from "../../../entities/AuthCodeType";
import { Phone } from "../../../entities/Phone";

type Params = {
    email?: string,
    phone?: Phone,
    authCodeType: AuthCodeType
}

export interface ReSendAuthCode {
    execute({ email, phone, authCodeType }: Params): Promise<boolean>
}