import Asus from "./Asus"
import MackBook from "./Macbook"

let asus = new Asus("Zenbook", true, true)
let macbook = new MackBook(2022, false, false)
console.log(asus)
console.log(asus.pressA())
console.log(macbook)
console.log(macbook.pressB())