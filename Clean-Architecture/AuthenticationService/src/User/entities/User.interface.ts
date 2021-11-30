import { Role } from "./Role"

export interface UserInterface {

  id: string
  email: string
  roles: Array<Role>
  phone?: string
  secret?: string
  mnemonics?: Array<string>
} 