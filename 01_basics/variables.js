const accId = 12345 // not able to change next
let accMail="lakhya@gmail.com" // due to scope related problem in Var we use let
var accPass ="123445" // simple variable declaration
accCity= "Jorhat" // not to use


console.table([accId,accMail,accPass,accCity])   // to show all in tabluler formate

accMail="heyy.mail.com" // can change
let accDOB    // it shows undefined coz it have no value

//after change
console.table([accId,accMail,accPass,accCity,accDOB]) 