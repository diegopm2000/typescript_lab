// Inheritance & Specialization

// Interfaces can extend another interfaces

interface Vehicle {
  manufacturer: string
  startEngine(): void
  stopEngine(): void
  refuel(): void
}

interface GroundVehicle extends Vehicle {
  drive(): void
}

interface SeaVehicle extends Vehicle {
  turnOnSiren(): void
  startFirePlace(): void
  stopFirePlace(): void
}

class OpelCorsa implements GroundVehicle {
  manufacturer: string = 'Opel'

  drive(): void {
    console.log('vroom vroom')
  }

  startEngine(): void {
    console.log('tocotocotocotoco...is a diesel engine')
  }

  refuel(): void {
    console.log('refueled!')
  }

  stopEngine(): void {
    console.log('tocotocococo.........What a rest!')
  }

  // We can add additional functions
  openTrunk(): void {
    console.log('opened')
  }
}

function proceed(v: Vehicle) {
  v.startEngine()
}

proceed(new OpelCorsa())

// We could use alias types instead of interfacess in the last versions of typescript

type VehicleV2 = {
  manufacturer: string
  startEngine(): void
  stopEngine(): void
  refuel(): void
}

type GroundVehicleV2 = VehicleV2 & {
  drive(): void
}