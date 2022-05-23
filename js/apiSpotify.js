
video={
    mostrar:"../asset/video/video.mp4"
}


const uri="https://api.spotify.com/v1/albums/1k8JDdearbBEc2DJ48CRvg/tracks?market=US&limit=12&offset=5"

const token= "Bearer BQCRUVLnRJuy7rty0c3njPJ4z6y6i5YCBNM8mfsb-PX9bvRqHjXw6p2akhSlpyn8nu-e2w9y4bMyNefEljg"

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

//Rutina para consumir API con el metodo post

const URIPOST="https://accounts.spotify.com/api/token"

// Almaceno los datos que voy a enviar

let client_id ="client_id=4beb0801c8964d0cba0bdd544f0af297"
let client_secret ="client_secret=26a2153552ec4141a62b670918121db6"
let grant_type="grant_type=client_credentials"

//Configurar peticion

const PETICIONPOST={
  method:"POST",
  headers:{"Content-Type":"application/x-www-form-urlencoded"
},
body:client_id+"&"+client_secret+"&"+grant_type+"&"
}

//voy al servidor a consumir el servicio

fetch(URIPOST,PETICIONPOST)
.then(function(resultado) {
  return resultado.json()
})

.then(function(resultado) {
 // console.log(resultado)

  let token=resultado.token_type+' '+resultado.access_token
 
  console.log(token)
 
})
.catch(function(resultado) {
  console.log(resultado)
})