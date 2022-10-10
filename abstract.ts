abstract class Vehicle {
    abstract wheels: number

    start(): void {
        console.log("Kendaraan Menyala")
    }
}

class Car extends Vehicle {
    wheels: number = 4
}
class Bcycle extends Vehicle {
    wheels: number = 2
}

const car = new Car()
const bcycle = new Bcycle()
console.log(car.wheels)
bcycle.start()