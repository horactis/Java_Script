window.onload = () =>{
    crearTitulo()
    mostrarBiblioteca()
    console.log();
    
}
function crearTitulo(){
    let tam = library.length
    let frase = `Hay ${tam} libros en la biblioteca`
    document.querySelector("h1").textContent = frase
}
function mostrarBiblioteca(){
    let papi = document.querySelector("section")
    for (const libro of library){
        //un article para cada libro
        let articulo = document.createElement("article")
        articulo.setAttribute("class","presentacion")
        papi.appendChild(articulo)

        //H3 del articulo
        let titulo = document.createElement("h3")
        titulo.textContent = libro.title
        articulo.appendChild(titulo)

        //imagen dentro del articulo
        let portada = document.createElement("img")
        portada.src = libro.cover
        articulo.appendChild(portada)

        //Para mostrar la info de cada libro
        portada.addEventListener("click", function(){

            //1- Guardo la info de ese libro en sesionStorage
            sessionStorage.setItem("libro",JSON.stringify(libro))
            //2- moverme a la pagina mostrar.html
            location.href = "mostrar.html"
        })
    }
}