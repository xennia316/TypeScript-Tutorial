type StringOrNumber = string | number;
type userObject =  {
    name: string,
    uid: StringOrNumber,
}
const logMyDetails= (uid: StringOrNumber, item: string): void => {
console.log(`${item} has an id of ${uid}`)
}

const sayHi = (user: userObject): void => {
    console.log(user.name, "says hi...")
}
