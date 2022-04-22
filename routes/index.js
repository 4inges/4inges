var express = require('express');
var router = express.Router();

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

router.get('/logAdmin', function(req, res, next) {
  res.render('logAdmin', { title: 'LOGIN DUEÑO' });
});

module.exports = router;
