//TIPE DATA YANG DINAMIS

function getData(value: any) {
    return value
}
// console.log(getData("Fajrul"))
// console.log(getData(22))

// Generic
function myData<T>(value: T) {
    return value
}
// console.log(myData("Fajrul").length)
// console.log(myData(12))

const arrrowFunc = <T, >(value: T) => {
    return value
}

// Generic Class
class List<T> {
    private data: T[]

    constructor(...elements: T[]) {
        this.data = elements
    }

    add(element: T): void {
        this.data.push(element)
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements)
    }

    getAll(): T[] {
        return this.data
    }
}

let numbers = new List<number>(1,2,3)
numbers.add(7)
numbers.addMultiple(2,5,6)
// console.log(numbers.getAll())

let random = new List<number | string>("satu", 2, 3, "empat")
console.log(random.getAll())