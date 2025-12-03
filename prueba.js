function mostrar() {
  alert("hola");
  console.log("adios");
  console.info("informacion");
  console.warn("aviso");
  console.error("error");
}
function limpiar() {
  console.log("dentro!!");
  /*console.confirm("seguro?");
  console.clear();
  console.log("se ha limpiado la consola");
  let res = prompt("introduce tu edad");
  res = Number(res);
  alert(`${res}, ${typeof(res)}`)*/

  /*var res = "10 20 30 47";
  //res = Number(res);
  res = parseInt(res) // coge el primer numero que pueda
  alert(res);
  */

  if(num == 6)
    alert ("mi cumple es el mes que viene")
  
  else
    console.log("Pablo es un tio guay")
  
  //Operador ternario
  /*
    condicion ? Lo que es ejecuta si es true : Lo que se ejecuta si es false
  */
 (num == 6) ? alert("mi cumple es el mes que viene") : console.log("Pablo es un tio guay");

}
function borrar(){
  var i;
  for (i = 0; i <= 10; i++){
    
  }
}


/*
Tipos de datos en javaScript
Number
String
Boolean
Object
undefined
*/
let edades = [14,17,18,20,40];
let res = edades.some(function(valor){//some es para ver si alguno cumple la condicion
  return (valor >= 18);
});

let res2 = edades.every((valor) => {return (valor >= 18);});//every coge todos los que cumplan la funcion

