let sueldo = [1000,1500,1700,2000,2300,2500,3000]
let neto = []
let fiscalAlto = []
for (let i = 0; i < sueldo.length; i++) {
    console.log(sueldo[i]);
    neto[i] = sueldo[i]-(sueldo[i]*15/100);
    if (sueldo[i] > 1935){
        fiscalAlto.push(sueldo[i])
    }
}

console.log(neto);
console.log(fiscalAlto);


/*forof

for (let valor of sueldo){
    console.ñpg(valor);
}

foreach

sueldos.forEach(function(valor){
    console.log(valor);
})

let neto = sueldo.map(function(valor){  con el map rellena un nuevo array
    return valor*85/100
});
console.log(neto);


filter
let fiscalAlto = sueldo.filter(function(valor){
    if(valor > 1935){
        return valor;
    }
})
*/

//ARRAY ASOCIATIVOS (MAPAS O DICCIONARIOS)

let mapa = [];

mapa['marcos'] = 20;
mapa['pablo'] = 0.1;
mapa['manu'] = 24;

console.log(mapa);

//matriz
let fila1 = [1,2,3];
let fila2 = [4,5,6];
let fila3 = [7,8,9];

let matriz = [fila1,fila2,fila3];

console.log(matriz);