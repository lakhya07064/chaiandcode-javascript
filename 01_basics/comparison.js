// there should same datatype of different values to compare

// null = 0 always in value

// primitive & Non premitive

//Symbol
const id = Symbol("123")
const id2 = Symbol(123)

console.log(id === id2) // false Coz it defines different values

//BigInt  -- to store large number

//like object

let myobj = {
    nameee:"lakhy",
     // here we use : in this like str
    age : 21
}

console.log(myobj)