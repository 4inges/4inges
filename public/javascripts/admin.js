let btnEntrar = document.getElementById('btnAdmin')
let username = document.getElementById('username')
let pwd = document.getElementById('pwd')
let formEnter = document.getElementById('formEnter')
let tablaCitas = document.getElementById('tablaCitas')

btnEntrar.addEventListener('click', ()=>{
    if(username.value == 'admin'){
        if(pwd.value == 'admin'){
            alert('Bienvenido admin')
            formEnter.style.display = 'none'
            tablaCitas.style.display = 'block'
        }else{
            alert('Usuario o contraseña incorrectos')
            username.value = ''
            pwd.value = ''
        }
    }else{
        alert('Usuario o contraseña incorrectos')
        username.value = ''
        pwd.value = ''
    }
})
