const express = require('express')
const router = express.Router();
const CursosController = require('./../controllers/cursosController')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
// definimos las rutas y derivamos al controlador correspondiente. Una interfaz que dice donde se manejan estas cosas

// le decimos cual se encarga de resolver el GET

router.get('/', CursosController.getCursos);
router.get('/:id', CursosController.getCursoById);
// router.post('/', CursosController.addCurso);
// router.put('/:id', CursosController.updateCurso);
router.delete('/:id', CursosController.deleteCursoById)

router.put('/', //validacion de campos en la peticion.
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripcion] debe ser especificada').not().isEmpty(),
        validarCampos
    ]
    , CursosController.addCurso
)

router.post('/', //validacion de campos en la peticion.
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripcion] debe ser especificada').not().isEmpty(),
        validarCampos
    ]
    , CursosController.addCurso
)
module.exports = router;