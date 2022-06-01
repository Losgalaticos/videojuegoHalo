
let img=[
 {foto:"../asset/img/img1.jpg"}
]


   
img.forEach(function(programadores) {
    
let columna=document.createElement("div");
columna.classList.add("col");

let imagenProgramador=document.createElement("img");
imagenProgramador.classList.add("w-100","img-fluid");
imagenProgramador.src=img.foto;





columna.appendChild(imagenProgramador)
})