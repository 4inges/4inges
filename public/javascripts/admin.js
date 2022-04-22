let btnEntrar = document.getElementById('btnAdmin')
let username = document.getElementById('username')
let pwd = document.getElementById('pwd')

let agenda = require('./reg.js')

btnEntrar.addEventListener('click', ()=>{
    if(username.value == 'admin'){
        if(pwd.value == 'admin'){
            alert('Bienvenido admin')
        }else{
            alert('contraseña incorrectos')
            username.value = ''
            pwd.value = ''
        }
    }else{
        alert('Usuario incorrectos')
        username.value = ''
        pwd.value = ''
    }
})
