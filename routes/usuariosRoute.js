const express = require('express')
const router = express.Router();
const UsuariosController = require('../controllers/usuariosController')
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');


// definimos las rutas y derivamos al controlador correspondiente. Una interfaz que dice donde se manejan estas cosas




// le decimos cual se encarga de resolver las peticiones

router.get('/', UsuariosController.getUsuarios);
router.get('/:id', UsuariosController.getUsuariosById);
router.post('/', UsuariosController.addUsuarios);
router.put('/:id', UsuariosController.updateUsuarios);
router.delete('/:id', UsuariosController.deleteUsuariosById)

module.exports = router;