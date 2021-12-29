import { Role } from "./Role"

export interface UserInterface {
  id: string
  email: string
  roles: Array<Role>
  phone?: string
  secret?: string
  mnemonics?: Array<string>

  // Montar esto con interfaces para diferenciar que tipos de autenticacion está soportando el usuario, ya que una cosa son los datos y otra, la autenticación que tiene activada.
  // Habría que modelar tambien la lista de aplicaciones para las que está dado de alta así como los roles por aplicación.
} 