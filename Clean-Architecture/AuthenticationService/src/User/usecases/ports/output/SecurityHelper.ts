export interface SecurityHelper {
    compareSecrets(secret: string, hashedSecret: string): Promise<boolean>
    compareAuthCodes(authCode: string, encryptedAuthCode: string): Promise<boolean>
}