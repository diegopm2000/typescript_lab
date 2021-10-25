import PaymentType from './enums/payment-type'
import IPaymentMethod from './factory/payment-method.interface'
import PaymentMethodFactory from './factory/payment-method-factory'

export default class Order {
  public paymentType?: IPaymentMethod
  public comission: number = 0

  constructor(private type: PaymentType, public amount: number) {

  }

  public create(): void {
    this.paymentType = PaymentMethodFactory.createPaymentType(this.type)

    this.comission = this.paymentType.comission * this.amount

    // ...
  }
}