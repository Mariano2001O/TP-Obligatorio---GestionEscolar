const express = require('express')
const router = express.Router();
const estudiantesController = require('./../controllers/estudiantesController');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
// definimos las rutas y derivamos al controlador correspondiente. Una interfaz que dice donde se manejan estas cosas

// le decimos cual se encarga de resolver el GET

router.get('/', estudiantesController.getEstudiantes);
router.get('/:id', estudiantesController.getEstudianteById);
// router.post('/', estudiantesController.addEstudiante);
// router.put('/:id', estudiantesController.updateEstudiante);
router.delete('/:id', estudiantesController.deleteEstudianteById)

router.put('/', //validacion de campos en la peticion.
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('edad', 'La edad debe ser especificada').not().isEmpty(),
        check('grado', 'El grado debe ser especificado').not().isEmpty(),
        validarCampos
    ]
    , estudiantesController.addEstudiante
)

router.post('/', //validacion de campos en la peticion.
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('edad', 'La edad debe ser especificada').not().isEmpty(),
        check('grado', 'El grado debe ser especificado').not().isEmpty(),
        validarCampos
    ]
    , estudiantesController.addEstudiante
)

module.exports = router;