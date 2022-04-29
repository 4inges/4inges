var express = require('express');
var router = express.Router();
var {client, dbName} = require('../db/mongo');

var c = 0

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'INICIO' });
});

router.get('/ubicaciones', function(req, res, next) {
  res.render('ubicaciones', { title: 'UBICACIONES' });
});

router.get('/servicios', function(req, res, next) {
  res.render('servicios', { title: 'SERVICIOS' });
});

router.get('/registros', function(req, res, next) {
    res.render('registros', { title: 'AGENDAR CITA'});
});

router.post('/agregar', function(req, res, next) {
  agregarCita(req.body)
  .then(()=>{
    let x = req.body
    let hora = x.horario
    let fec = new Date(x.fechaAg).toDateString()
    console.log('Cita Agregada!')
    res.redirect(`/?hora=${hora}&fecha=${fec}&total=${c}`)
  })
  .catch((err)=>{
    console.log(err);
  })
  .finally(()=>{
    c = 0
    client.close();
  })
});

router.get('/logAdmin', async function(req, res, next) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('citas');
  let citas = await collection.find().sort({fecha:1, horario:1, sucursal:1}).toArray()
  res.render('logAdmin', { title: 'LOGIN DUEÑO', citas: citas});
});

async function agregarCita(datos){
  var cuenta = 0
  var servicios = []

  switch(datos.tipoCoche){
    case 'Compacto':
      cuenta += 80
      break
    case 'Taxi/Uber':
      cuenta += 60
      break
    case 'Camioneta':
      cuenta += 100
      break
    case 'Sedan':
      cuenta += 80
      break
  }

  if(datos.lavExt){
    cuenta += 80
    servicios.push('lavExt')
  }
  if(datos.aspInt){
    cuenta += 50
    servicios.push('aspInt')
  }
  if(datos.limpFaros){
    cuenta += 70
    servicios.push('limpFaros')
  }

  let fechaX = new Date(datos.fechaAg).toDateString()

  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('citas');
  await collection.insertOne({
      coche: datos.tipoCoche,
      servicios: servicios,
      sucursal: datos.sucursal,
      fecha: fechaX,
      horario: datos.horario,
      nomCli: datos.nomCli,
      telCli: datos.telCli, 
      cuenta: cuenta
  });

  c = cuenta
}

module.exports = router;
