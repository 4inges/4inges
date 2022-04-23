var express = require('express');
var router = express.Router();
var {client, dbName} = require('../db/mongo');

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
  res.render('registros', { title: 'AGENDAR CITA' });
});

router.post('/agregar', function(req, res, next) {
  agregarCita(req.body)
    .then(()=>{
        console.log('Cita Agregada!')
        res.redirect('/registros')
      })
      .catch((err)=>{
          console.log(err);
      })
      .finally(()=>{
          client.close();
      })
});

router.get('/logAdmin', function(req, res, next) {
  res.render('logAdmin', { title: 'LOGIN DUEÑO' });
});

async function agregarCita(datos){
  console.log(datos)
  // await client.connect();
  // const db = client.db(dbName);
  // const collection = db.collection('citas');
  // await collection.insertOne({
  //     coche: tipoCoche.value,
  //     servicios: servicios,
  //     sucursal: sucursal.value,
  //     fecha: fechaAg.value,
  //     horario: horario.value,
  //     nomCli: nomCli.value,
  //     telCli: telCli.value, 
  //     cuenta: cuenta
  // });
}

module.exports = router;
