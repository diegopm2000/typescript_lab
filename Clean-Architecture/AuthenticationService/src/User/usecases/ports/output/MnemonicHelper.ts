export interface MnemonicHelper {
    // Create the array of mnemonics hashed
    creteMnemonics(): string
    toHashedArray(mnemonics: string): Array<string>
}