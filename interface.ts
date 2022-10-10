// Interface itu syarat wajib suatu class jika di implements (Blueprint atau kontrak)
interface Laptop {
    name: string
    on(): void
    off(): void
}

class Asus implements Laptop {
    name: string
    isGaming: boolean

    constructor(name: string, isGaming: boolean) {
        this.name = name
        this.isGaming = isGaming
    }

    on(): void {
        console.log(`${this.name} nyala.`)
    }
    off(): void {
        console.log(`${this.name} mati.`)
    }
}

class Acer implements Laptop {
    name: string
    isGaming: boolean

    constructor(name: string, isGaming: boolean) {
        this.name = name
        this.isGaming = isGaming
    }
    on(): void {
        console.log(`${this.name} nyala.`)
    }
    off(): void {
        console.log(`${this.name} mati.`)
    }
}

let asus = new Asus("Asus", true)
asus.on()