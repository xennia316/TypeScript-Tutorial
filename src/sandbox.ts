let greet: Function;

greet = () => {
    console.log("Hello my neighbors")
}

const add = (a: number, b:number, c?: number | string): void => {
    console.log(a + b);
    console.log("Can you see me? ", c);
}
add(4,8,'9');

const minus = (a:number, b:number): number =>{
    let c:number  = a - b;
    console.log(c)
return (c)
}


minus(10,2);