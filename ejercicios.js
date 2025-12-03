//ejercicio 8
function sumaArray(arr){
    let lista = [];
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
        lista.push(suma);
    }
    return (lista);  
}
//ejercicio 9
function countBy(x,y){
    if ((x < 0)||(y < 0)){
        return [];
    }else{
        let array = [];
        for (let i = 0; i <= y; i++) {
            array[i]=x*(i+1);
        }
        return array;
    }
}
//8,11,14,16
//ejercicio 11
function norepe(lista1, lista2){
    
    let norepe = [];
    for (let i = 0; i < lista2.length; i++) {
        if(!lista1[i].includes(lista2[i])){
            norepe.push(lista1[i])
        }
    }
    return norepe;
}

//ejercicio 14
function suma(lista){
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        
    }
}

//ejercicio tesoro
function busquedaTesoro(){
    let vivo = true;
    let encontrado = false;
    let numero1;
    let numero2;
    let tablero = []
    for (let i = 0; i <= 4; i++) {
        tablero.push([])
        for (let j = 0; j <= 5; j++) {
            tablero[i][j] = "-";
        }
    }
    let randomi;
    let randomj
    let i = 0
    while(i<3) {
        randomi = parseInt(Math.random()*4);
        randomj = parseInt(Math.random()*5);
        if(tablero [randomi][randomj] == "-"){
            tablero [randomi][randomj] = "x";
            i++
        }
    }
    i = 0
    while(i<1){
        randomi = parseInt(Math.random()*4);
        randomj = parseInt(Math.random()*5 );
        if(tablero [randomi][randomj] == "-"){
            tablero [randomi][randomj] = "€";
            i++
        }
    }
    console.log(tablero);
    
    let tablero2 = [];
    tablero2.push([]);
    for (let i = 1; i <= 5; i++) {
        tablero2.push([]);
        for (let j = 1; j <= 6; j++) {
            tablero2[i][j] = "*";
        }
    }
    
    do {
        
        do{
            numero1 = parseInt(prompt("Mete un numero"));
            numero2 = parseInt(prompt("Mete otro numero"));
        }while (numero1 < 0||numero2 < 0||numero1 > 6||numero2 > 5||Number.isNaN(numero1)||Number.isNaN(numero2))


        switch (true) {
        case(tablero[numero1-1][numero2-1].includes ("-")):
            tablero2[numero1][numero2] = "-";
            break;

        case(tablero[numero1-1][numero2-1].includes("x")):
            tablero2[numero1][numero2] = "x";
            vivo = false;
            break;

        case(tablero[numero1-1][numero2-1].includes("€")):
            tablero2[numero1][numero2] = "€";
            encontrado = true;
            break;
        }
        let res = ""
        for (let i = 1; i < tablero2.length; i++) {
            for (let j = 1; j < tablero2.length; j++) {
                res += tablero2[i][j] + " ";
                
            }
            res += "\n"
        }
        console.log(res);
        
    } while (vivo && !encontrado);

    if(!vivo){
        alert("Has muerto");
    }else{
        alert("Has encontrado el tesoro");
    }
}

//Ejercicio automata
function inicializarAutomata(){
    let tam1 = -1;
    do{
        tam1 = prompt("Dame un tamaño");
    }while(tam1 < 3)
    let automataA=[];
    for (let i = 0; i < tam1; i++) {
            automataA[i] = 0;       
    }    
    return automataA
}

function mostrarEstado(array){
    let res = "";
    for (let i = 0; i < array.length; i++) {
        if(array[i] == 1){
            res += "*";
        }else{
            res += "."
        }
    }
    
    console.log(res);    
}

function primeraJugada(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = parseInt(Math.random()*2);
    }
    return array;
}

function automata() {
    let juego = inicializarAutomata();
    let cambio=[];
    let rondas = parseInt(prompt("¿Cuantas rondas?"));
    juego = primeraJugada(juego);
    for (let j = 0; j < rondas; i++) {
        mostrarEstado(juego);
        for (let i = 1; i < juego.length-1; j++) {
            if (juego[i-1]==0&&juego[i]==0&&juego[i+1==0]) {
                juego[i]=0;
            }else if(juego[i-1]==1&&juego[i]==0){
                juego[i]=1;
            }else if(juego[i-1]==0&&juego[i]==0&&juego[i+1]==1){
                juego[i]=1;
            }else if(juego[i-1]==0&&juego[i]==1&&juego[i+1]==0){
                juego[i]=1
            }else if(juego[i-1]==0&&juego[i]==1&&juego[i+1]==1){
                juego[i]=0
            }else if (juego[i-1]==1&&juego[i]==1){
                juego[i]=0
            }    
        }         
    }
    
}

