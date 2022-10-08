// Tipe Data Primitif
let isMarried: boolean = true
let age: number = 21
let nama: string = "Fajrul Aslim"

// Array
let names: string[] = ["Fajrul", "Aslim"]
let fruits: Array<string> = ["Apple", "Banana"]
let numbers: Array<number> = [1, 2, 3]

// Array Tuple
let student: [string, string, number] = ["01", "Aslim", 22]

// Ubah Data Array
student[1] = "Fajrul"

// Delete Data Array
fruits.push("Grape")
delete fruits[0]

// Enum
enum Gender1 { Male, Female, Unknown }
enum Gender2 { Male = 1, Female = 2, Unknown = -1 }
enum Gender3 { Male = "Male", Female = "Female", Unknown = "Unknown" }
let jenisKelamin: Gender3 = Gender3.Male;

// Any
let heroes: any = "Iron Man"
let arrayAny: any[] = [1, "Spriderman"]
heroes = 20
