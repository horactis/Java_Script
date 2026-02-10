window.onload = () =>{
    let libro = sessionStorage.getItem("libro")
    let tabla = document.createElement("table")

    let librazo = JSON.parse(libro)
    console.log(librazo);
    let titulo = document.createElement("h3")
    titulo.textContent = librazo.title;


    document.querySelector("section").appendChild(titulo)
    document.querySelector("section").appendChild(tabla)
    

    
    for (dato in librazo){
        if(dato != "cover" && dato != "title"){
            let tr = document.createElement("tr")
            let td = document.createElement("td")
            let tdInf = document.createElement("td")
        
            td.textContent = dato
            tdInf.textContent = librazo[dato]
            tr.appendChild(td)
            tr.appendChild(tdInf)
            tabla.appendChild(tr)
        }
    }
    let imagen = document.createElement("img")
    imagen.src = librazo.cover
    imagen.setAttribute("class","portada")
    document.querySelector("section").appendChild(imagen)
    
}