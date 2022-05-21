
video={
    mostrar:"../asset/video/video.mp4"
}


const uri="https://api.spotify.com/v1/albums/1k8JDdearbBEc2DJ48CRvg/tracks?market=US&limit=12&offset=5"

const token= "Bearer BQBxNhJEKZ7E2XDiPp6jXM47QBQG2g__D-HO6qD_y4yZWaEFKiaMn0QvoJSnLyguOPDIFTBtMfd4YSjjl2CaW2QTq6y-kN_ALwZ2MAs90UuqljD7SSjwbpmHLBtqHVBzsXSYlVnpPa_25GBLqBzxFlph8YNa_n8mazI"

const peticion={
    method:"GET",
    headers:{Authorization:token}
}

fetch(uri,peticion)
.then(function(resultado) {
  return(resultado.json())
})
.then(function(resultado) {
    console.log(resultado.items)
    escucharMusica(resultado.items)
  
})
.catch(function(resultado) {
    console.log(resultado); 
})

let fila=document.getElementById("fila")

function escucharMusica(albums) {
    albums.forEach(function(cancion) {
    
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let nombreCancion=document.createElement("h4")
    nombreCancion.classList.add("text-center","my-3")
    nombreCancion.textContent=cancion.name
        
    let audioCancion=document.createElement("audio")
    audioCancion.classList.add("w-100")
    audioCancion.setAttribute("controls","controls")
    audioCancion.src=cancion.preview_url

    let videoCancion=document.createElement("video")
    videoCancion.setAttribute("autoplay","muted")
    videoCancion.setAttribute("loop","preloa")
    videoCancion.classList.add("w-100")
    videoCancion.src=video.mostrar

 



   tarjeta.appendChild(videoCancion)
   tarjeta.appendChild(audioCancion)
   tarjeta.appendChild(nombreCancion)
   columna.appendChild(tarjeta)
   fila.appendChild(columna)   
    })
}