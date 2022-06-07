export function llenartienda(){

let productosBD=[

    {foto:'img/tienda1.jpg',nombre:"Videojuego",precio:100000,descripcion:"Videojuego HALO 5"},
    {foto:'img/tienda2.jpg',nombre:"Casco",precio:5000000,descripcion:"Casco HALO"},
    {foto:'img/tienda3.jpg',nombre:"Pistola Nerf",precio:80000,descripcion:"Nerf HALO"},
    {foto:'img/tienda4.jpg',nombre:"Cuadro",precio:600000,descripcion:"Cuadro HALO 5"},
    {foto:'img/tienda5.jpg',nombre:"Consola XBOX ONE",precio:1000000,descripcion:"XBOX ONE"},
    {foto:'img/tienda6.jpg',nombre:"Auriculares",precio:100000,descripcion:"Auriculares HALO"},
    {foto:'img/tienda7.jpg',nombre:"Vaso",precio:50000,descripcion:"Vaso HALO 5"},
    {foto:'img/tienda8.jpg',nombre:"Cojines",precio:70000,descripcion:"Cojines"},
    {foto:'img/tienda9.jpg',nombre:"Espada de Energia",precio:200000,descripcion:"Espada"},
    {foto:'img/tienda10.jpg',nombre:"Camiseta",precio:50000,descripcion:"Camiseta SL 2.0"},
    {foto:'img/tienda11.jpg',nombre:"Pantaloneta",precio:30000,descripcion:"Pantaloneta SL 2.0"},
    {foto:'img/tienda12.jpg',nombre:"Mega Blok",precio:90000,descripcion:"Mega Blok"},
    {foto:'img/tienda13.jpg',nombre:"Camiseta",precio:50000,descripcion:"Camiseta HL"},
    {foto:'img/tienda14.jpg',nombre:"Mause",precio:75000,descripcion:"Mause"},
    {foto:'img/tienda15.jpg',nombre:"Cadena",precio:60000,descripcion:"Cadena"},
    {foto:'img/tienda16.jpg',nombre:"Cortina",precio:60000,descripcion:"Cortina"},
    {foto:'img/tienda17.jpg',nombre:"Tapabocas",precio:1000,descripcion:"Tapabocas"},
    {foto:'img/tienda18.jpg',nombre:"Bolsa de compras",precio:50000,descripcion:"Camiseta SL 2.0"},
    {foto:'img/tienda19.jpg',nombre:"Estuche",precio:20000,descripcion:"Camiseta SL 2.0"},
    {foto:'img/tienda20.jpg',nombre:"Figura",precio:80000,descripcion:"Figura"},
]

    
let fila=document.getElementById("fila")

productosBD.forEach(function(producto){

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let foto=document.createElement("img")
    foto.classList.add("car-img-top")
    foto.src=producto.foto
    
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    let precio=document.createElement("h5")
    precio.classList.add("text-center")
    precio.textContent= "$" + producto.precio
    
    let descripcion=document.createElement("p")
    descripcion.classList.add("text-center")
    descripcion.textContent=producto.descripcion

    let botonProductos=document.createElement("button")
    botonProductos.classList.add("m-2")
    botonProductos.classList.add("btn")
    botonProductos.classList.add("btn-outline-success")
    botonProductos.textContent = "Productos"
    botonProductos.setAttribute("type" , "button")



    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna) 
    tarjeta.appendChild(botonProductos)
    

})
}