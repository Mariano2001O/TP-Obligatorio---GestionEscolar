const express = require('express')
const router = express.Router();
const profesoresController = require('./../controllers/profesoresController')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
// definimos las rutas y derivamos al controlador correspondiente. Una interfaz que dice donde se manejan estas cosas

// le decimos cual se encarga de resolver el GET

router.get('/', profesoresController.getProfesores);
router.get('/:id', profesoresController.getProfesorById);
// router.post('/', profesoresController.addProfesor);
// router.put('/:id', profesoresController.updateProfesor);
router.delete('/:id',profesoresController.deleteProfesorById)

router.put('/', //validacion de campos en la peticion.
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('especialidad', 'la especialidad debe ser especificada').not().isEmpty(),
        check('email', 'el email debe ser especificada').not().isEmpty(),
        validarCampos
    ]
    , profesoresController.addProfesor
)


router.post('/', //validacion de campos en la peticion.
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('especialidad', 'la especialidad debe ser especificada').not().isEmpty(),
        check('email', 'el email debe ser especificada').not().isEmpty(),
        validarCampos
    ]
    , profesoresController.addProfesor
)

module.exports = router;