// const user = {
//     name: "uzain",
//     email: "uzain@gmail.com",
//     isActive: true
// }
// function createUser({ name: string, isPaid: boolean }) { }
// let newUser = { name: "Uzain", isPaid: false }
// createUser(newUser)
// // With return
// function createCourse(): { name: string, price: number } {
//     return { name: "reactjs", price: 399 }
// }

//make like a datatype
// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }
// function createUser(user: User): User { return { name: "", email: "", isActive: true } }
// createUser({ name: "", email: "", isActive: true })


type User = {
    readonly _id: String
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number
}
// function createUser(u: User) { }
//easier with varaible
let myUser: User = {
    _id: "12",
    name: "u",
    email: "u@u.com",
    isActive: true
}
myUser.email = "u@gmail.com"
//myUser._id = "endewoind" cant do it 
type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}



export { }