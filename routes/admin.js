var express = require('express');
var router = express.Router();
var {client, dbName} = require('../db/mongo');
var ObjectId = require('mongodb').ObjectId

router.get('/:id', function(req, res, next){
    eliminarCita(req.params.id)
      .then(()=>{
          console.log('Cita eliminada')
          res.redirect('/logAdmin')
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            client.close();
        })
  })

async function eliminarCita(datos){
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('citas');
    await collection.findOneAndDelete({'_id':ObjectId(datos)})
  }

module.exports = router;
