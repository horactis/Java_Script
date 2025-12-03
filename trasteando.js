console.log("Empezamos");

console.log(typeof(NaN))

let res = (4 > 10) || (6 < 19);

/*
Infinity
-Infinity
NaN
*/

console.log(4==4);
console.log(NaN==NaN);
console.log(res);
//TEMPLATE STRINGS
let num = 34;
let a =`Marcos es un
    tio ${num}
    guay ${(num*5)}`;
console.log(a);



let res2;

console.log(res2+2);

console.log(null==undefined)


let num2 = 34+5;
console.log(num2)


//COERCION DE DATOS: convierte el tipo de dato a otro sin que se lo diga el programador
//explicita lo fuerza el programador y inplicito lo hace el programa solo
let op = "2"+"2"-"2";
let tipo = typeof(op)

console.log(tipo)
console.log(op);

op = true+true+true;
console.log(op)
console.log(tipo)

op = true === 1;
console.log(op)
console.log(tipo)

/*
Esto es explicito

Boolean()
Number()
String()
*/
op = Number("tokate");
console.log(op)
console.log(tipo)

op = String(false+23);
console.log(op)
console.log(tipo)