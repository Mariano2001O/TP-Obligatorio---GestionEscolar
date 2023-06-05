const express = require('express')
const router = express.Router();
const profesoresController = require('./../controllers/profesoresController')
// definimos las rutas y derivamos al controlador correspondiente. Una interfaz que dice donde se manejan estas cosas

// le decimos cual se encarga de resolver el GET

router.get('/', profesoresController.getProfesores);
router.get('/:id', profesoresController.getProfesorById);
router.post('/', profesoresController.addProfesor);
router.put('/:id', profesoresController.updateProfesor);
router.delete('/:id',profesoresController.deleteProfesorById)

module.exports = router;