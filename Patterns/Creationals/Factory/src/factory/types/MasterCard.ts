import IPaymentMethod from '../../payment-method.interface'

export default class Mastercard implements IPaymentMethod {
  get comission(): number {
    return 0.04
  }
}