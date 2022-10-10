// Cara 1
export class User1 {
    public name: string;

    constructor(name: string) {
        this.name = name
    }
}

// Cara 2
export class User2 {
    constructor(public name: string) {}
}

let user = new User1("Fajrul")

// Inheritance
export class User {
    name: string

    constructor(name: string) {
        this.name = name
    }

    setName(value: string): void {
        this.name = value
    }

    getName = (): string => {
        return this.name
    }
}
class Admin extends User {
    read: boolean = true
    write: boolean = true
    phone: string
    private _email: string = ""
    static getRoleName: string = "Admin"

    constructor(phone: string, name: string) {
        super(name)
        this.phone = phone
    }

    static getHei() {
        return "Hei"
    }

    getRole(): { read: boolean, write: boolean } {
        return {
            read: this.read,
            write: this.write
        }
    }

    set email(value: string) {
        this._email = value
    }

    get email(): string {
        return this._email
    }
}
let admin = new Admin("0812", "Fajrul")
admin.email = "fajrul.aslim@gmail.com"
console.log(admin.email)

const rolename = Admin.getRoleName
const hei = Admin.getHei()