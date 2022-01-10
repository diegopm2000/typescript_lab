import { Phone } from "../../../entities/Phone";
import { AuthPayloadWithMnemonics } from "../../shared/AuthPayloadWithMnemonics";

export interface SignupUC {
    execute(email: string, phone: Phone, emailAuthCode: string, phoneAuthCode: string, productionMode: boolean): Promise<AuthPayloadWithMnemonics>
}