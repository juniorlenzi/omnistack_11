const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');


routes.get('/ongs', OngController.listOngs)
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentsController.list);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index)

module.exports = routes;
