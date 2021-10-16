// Abstract class does not allow to instantiate a member of this class
abstract class Vehicle {

  // Limits the access to child classes
  protected manufacturer: string

  constructor(manufacturer: string) {
    this.manufacturer = manufacturer
  }

  move() {
    console.log(`Vehicle of ${this.manufacturer} moved magically...`)
  }
}

class GroundVehicle extends Vehicle {

  private vehicleType: string

  constructor(manufacturer: string, vehicleType: string) {
    super(manufacturer)
    this.vehicleType = vehicleType
  }
  
  move() {
    console.log('vroom vroom')
    super.move()
  }

  repair() {
    console.log(`A momment please...reading the ${this.manufacturer} manual`)
  }
}

class AirVehicle extends Vehicle {

  private vehicleType: string

  constructor(manufacturer: string, vehicleType: string) {
    super(manufacturer)
    this.vehicleType = vehicleType
  }

  move() {
    console.log('fffssssssssssssss')
    super.move()
  }
}

class WaterVehicle extends Vehicle {

  private vehicleType: string

  constructor(manufacturer: string, vehicleType: string) {
    super(manufacturer)
    this.vehicleType = vehicleType
  }

  move() {
    console.log('splassshh')
    super.move()
  }
}

let myGroundVehicle = new GroundVehicle('car', 'Opel');
myGroundVehicle.move()

let myAirVehicle = new AirVehicle('plane','F-15');
myAirVehicle.move()

let myWaterVehicle = new WaterVehicle('boat','coastguard');
myWaterVehicle.move()

let vehicle: Vehicle = new GroundVehicle('motorcycle', 'Honda')
vehicle.move()