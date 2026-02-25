//when we dont know what to pass or expect better than any 
let score: number | string = 33
score = 44;
score = "55"

type User = {
    name: string,
    id: number
}
type Admin = {
    usename: string;
    id: number
}

let hitesh: User | Admin = { name: "hitesh", id: 1 }

hitesh = { usename: "hc", id: 1 }

//union narrowing 
function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}
//array 
const data: number[] = [1, 2, 3]
const data1: string[] = ["1", "2", "3"]
const data2: (string | number)[] = ["1", 2]
//constant 
let pi: 3.14 = 3.14;
//pi = 3.57 wrong
pi = 3.14
//use case 
let seatAllotment: "a" | "m" | "w"
seatAllotment = "a"
//seatAllotment="p"