const express = require('express')
const router = express.Router();
const CursosController = require('./../controllers/cursosController')
// definimos las rutas y derivamos al controlador correspondiente. Una interfaz que dice donde se manejan estas cosas

// le decimos cual se encarga de resolver el GET

router.get('/', CursosController.getCursos);
router.get('/:id', CursosController.getCursoById);
router.post('/', CursosController.addCurso);
router.put('/:id', CursosController.updateCurso);
router.delete('/:id',CursosController.deleteCursoById)

module.exports = router;