import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"



let botonRegistro = document.getElementById("botonRegistro")
let modalregistro=new bootstrap.Modal(document.getElementById('mensaje'))
let textomodal=document.getElementById("mensajemodal")

botonRegistro.addEventListener("click",function(event){
event.preventDefault()

let email= document.getElementById("Email").value
let password = document.getElementById("password").value



const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    alerta.textContent="Exito en el registro"
    alerta.classList.add("alert-primary")
    alerta.classList.remove("alert-danger","invisible")
    setTimeout(function(){
        alerta.classList.add("invisible")
        formulario.reset()
        window.location.href = "index.html"
    },2000)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alerta.textContent="Fallamos en el registro: "+errorMessage
    alerta.classList.add("alert-danger")
    alerta.classList.remove("alert-primary","invisible")
    setTimeout(function(){
        alerta.classList.add("invisible")
    },2000)
    });
    // ..
  });

