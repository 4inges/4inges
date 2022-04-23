
let btnEntrar = document.getElementById('btnAdmin')
let username = document.getElementById('username')
let pwd = document.getElementById('pwd')

console.log(agenda)

btnEntrar.addEventListener('click', ()=>{
    if(username.value == 'admin'){
        if(pwd.value == 'admin'){
            alert('Bienvenido admin')
            console.log(agenda)
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
