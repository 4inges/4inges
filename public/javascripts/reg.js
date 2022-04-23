// SELECCIONES DE DOC HTML
// var tipoCoche = document.getElementById('tipoCoche')
// var lavExt = document.getElementById('lavExt')
// var aspInt = document.getElementById('aspInt')
// var limpFaros = document.getElementById('limpFaros')
// var sucursal = document.getElementById('sucursal') 
var fechaAg = document.getElementById('fechaAg')
// var horario = document.getElementById('horario')
// var nomCli = document.getElementById('nomCli')
// var telCli = document.getElementById('telCli')
// var btnAgendar = document.getElementById('btnAgendar')

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
dd = '0' + dd;
}

if (mm < 10) {
mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
fechaAg.setAttribute("min", today);

var agenda = []
var servicios = []
var cuenta = 0

btnAgendar.addEventListener('click', ()=>{
    switch(tipoCoche){
        case 'Compacto':
            cuenta += 80
            coche = 'Compacto'
            break
        case 'taxUber':
            cuenta += 60
            coche = 'Taxi/Uber'
            break
        case 'Camioneta':
            cuenta += 100
            coche = 'Camioneta'
            break
        case 'Sedan':
            cuenta += 80
            coche = 'Sedan'
            break
    }

    if(lavExt.checked){
        var s1 = lavExt.value
        servicios.push(s1)
        cuenta += 80
    }
    if(aspInt.checked){
        var s2 = aspInt.value
        servicios.push(s2)
        cuenta += 50
    }
    if(limpFaros.checked){
        var s3 = limpFaros.value
        servicios.push(s3)
        cuenta += 70
    }

    // agregarCita()
    // .then(()=>{
    //     alert('Cita Agregada!')
    //     res.redirect('/')
    //   })
    //   .catch((err)=>{
    //       console.log(err);
    //   })
    //   .finally(()=>{
    //       client.close();
    //   })

    // agenda.push(cita)

    // servicios = []
})

// async function agregarCita(){
//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection('citas');
//     await collection.insertOne({
//         coche: tipoCoche.value,
//         servicios: servicios,
//         sucursal: sucursal.value,
//         fecha: fechaAg.value,
//         horario: horario.value,
//         nomCli: nomCli.value,
//         telCli: telCli.value, 
//         cuenta: cuenta
//     });
// }