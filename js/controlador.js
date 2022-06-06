import{llenartienda} from './tiendallenado.js'
import {ampliarInformacionProducto} from './ampliarinfo.js'

//creo un producto vacio
let producto={}

//llamando a tienda llenado
llenartienda()

let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))


//rutina para ampliar informacion
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){ 
        producto=ampliarInformacionProducto(evento)
        console.log(producto)
        modalinfo.show()
    }
})

//rutina para añadir un producto al carrito de compras
let carrito=[]
let botonAgrgarCarrito=document.getElementById("botonadd")
botonAgrgarCarrito.addEventListener("click",function(){

    //Debo capturar la cantidad y agregarla al producto
    let cantidad=document.getElementById("CantidadProducto").value
    producto.cantidad=cantidad

   
    //Agrego el producto al carrito
    carrito.push(producto)

    //Pintar la capsula en el carrito
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    
    let capsula=document.getElementById("capsula") 
    capsula.textContent=suma
    capsula.classList.remove("invisible")

    console.log(carrito)

    modalinfo.hide()


})

//rutina para limpiar
let limpiar=document.getElementById("limpiar")
limpiar.addEventListener("click",function(){

    carrito=[]

    let capsula=document.getElementById("capsula") 
    capsula.classList.add("invisible")

})

//rutina para ver el carrito
let botonVerCarrito=document.getElementById("vercarrito")
botonVerCarrito.addEventListener("click",function(){

    //recorrer el carrito y pintar los productos
    let base=document.getElementById("basecarro")

    base.innerHTML=""

    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto

        let nombrePro=document.createElement("h4")
        nombrePro.classList.add("text-center")
        nombrePro.textContent=producto.nombre 

        let precioPro=document.createElement("h5")
        precioPro.classList.add("text-center")
        precioPro.textContent=producto.precio

        let cantidadPro=document.createElement("h5")
        cantidadPro.classList.add("text-center")
        cantidadPro.textContent="cantidad: "+ producto.cantidad

        let subtotal=document.createElement("h5")
        subtotal.classList.add("text-center")
        subtotal.textContent="Subtotal: $" + producto.subtotalPro

        //Padre e hijos
       columna1.appendChild(foto)
       columna2.appendChild(nombrePro)
       columna2.appendChild(precioPro)
       columna2.appendChild(cantidadPro)
       columna2.appendChild(subtotal)
       fila.appendChild(columna1)
       fila.appendChild(columna2)
       base.appendChild(fila)
    })
    let total = 0
    carrito.forEach(function(producto){
        total = total = Number(producto.cantidadPro * producto.precioPro)
    })

    let totalCompra = document.getElementById("total")
    totalCompra.textContent = "Total: $" + total

    let btbdolar = document.getElementById("btndolar")
    btbdolar.addEventListener ("Click", function(){

        let precioPro = total
        let dolar = precioPro / 4000
        totalCompra.textContent = "total dolares $" + dolar.toFixed(2)
    })

    modalcompra.show()

    console.log("Hola mundo")
})