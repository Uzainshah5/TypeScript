function addTwo(num: number): number {
    return num + 2
}
function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {
}
//default value
let loginUser = (name: string, email: string, isPaid: boolean = false) => {
}
loginUser("uz", "u@u.com")


signUpUser("uzain", "uzainshah@gmail.com", true)

addTwo(2)
getUpper("hello")
// Arrow function
const demo = (name: string): string => {
    return ""
}

//TypeScript is intelligent 
const hero = ["Spiderman", "batman", "ironman"]
hero.map(hero => {
    return 'hero is ${hero}'
})
//better syntax
hero.map((hero: string) => {
    return 'hero is ${hero}'
})
function consoleError(errmsg: string): void {
    console.log(errmsg);

}
function handleError(errmsg: string): never {
    throw new Error(errmsg);

}




export { }