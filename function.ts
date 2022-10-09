function getName(): string {
    return "Hello"
}

function getAge(): number {
    return 1
}

function printName(): void {
    console.log("Void tidak boleh return")
}

// Arguments Types
function multiply( a: number, b: number): number {
    return a * b
}
const result: number = multiply(2, 5)

// Function as type
type Age = number;
let age: Age = 1

type Operasi = (a: number, b: number) => number

const Tambah: Operasi = ( i: number, j: number): number => {
    return i + j
}
const Kurang: Operasi = ( i: number, j: number): number => {
    return i - j
}
const soal1 = Tambah(4, 20)
const soal2 = Kurang(34, 12)

// Default Parameter
const fullName = (first:string, last: string = "Aslim"): string => {
    return first + " " + last
}

// Optional Parameter
const getKalimat = (a: string, b?: string): string => {
    return a + " " + b
}
console.log(getKalimat("Fajrul"))
