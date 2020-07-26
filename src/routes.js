const routes = require('express').Router();
const UserController = require('./app/controllers/UserController');
const validatorMid = require('./app/middlewares/validators');
const jwtMid = require('./app/middlewares/jwt');

routes.post('/login', UserController.auth);
routes.post('/users', validatorMid.userCreateValidator, UserController.store);

routes.use(jwtMid); // será utilizado em todas as rotas abaixo
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.destroy);
routes.put(
  '/users/:id',
  validatorMid.userUpdateValidator,
  UserController.update
);

module.exports = routes;
