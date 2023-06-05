const estudiantesModel = require('./../models/estudiantesModel') // traemos todo lo que tiene dentro 

// los controladores se encargan de la parte logica

exports.getEstudiantes = async (req, res) => {
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const estudiantes = await estudiantesModel.obtenerEstudiantes();

        //si todo va bien respondemos con los estudiantes, del lado del cliente
        //lo obtenemos con json
        //status 200 que todo fue ok
        res.status(200).json({
            success: true,
            data: estudiantes
        })

    } catch (error) {
        //si las instrucciones dentro del bloque try fallan, 
        //capturamos el error, lo mostramos en consola
        //y devolvemos la info del error al cliente
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}
exports.getEstudianteById = async (req, res) => { //(Propuestas tipo get "traen informacion") estudiante por id
    const id = req.params.id;
    try {
        const estudiante = await estudiantesModel.getEstudianteById(id)

        if (estudiante.length < 1) {
            res.status(404).json({
                success: false,
                msg: `NO EXISTE: ${id}`
            })

        }
        res.status(200).json({
            success: true,
            estudiante

        })
    }

    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}

exports.addEstudiante = async (req, res) => { //propuesta tipo post, Envia informacion
    const nuevoestudiante = req.body;
    try {
        const id = await estudiantesModel.addEstudiante(nuevoestudiante)
        res.status(201).json({
            success: true,
            msg: 'anduvo crack',
            nuevoestudiante
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}

exports.updateEstudiante = async (req, res) => {  //propuesta tipo put. Actualiza datos
        const id = req.params.id;
        const estudianteActualizado = req.body;
    
        const estudiante = {
            id,
            ...estudianteActualizado  //muestra todo lo que necesitamos de forma mas breve
        }
        console.log(estudiante)
        try {
            const listaActualizada = await estudiantesModel.updateEstudiante(estudiante)
            if (listaActualizada < 1) {
                res.status(404).json({
                    success: false,
                    message: "datos no actualizados"
                })
            }
            res.status(200).json({
                success: true,
                message: "lista actualizada",
                estudiante
            })
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "No andaaaaaaaaaaaaa"
            })
        }
    }
exports.deleteEstudianteById = async (req, res) => { // peticion delete Borra informacion
    const id = req.params.id;
    try {
        const estudiante = await estudiantesModel.deleteEstudianteById(id)

        if (estudiante.length < 1) { //pregunto si existe el estudiante
            res.status(404).json({
                success: false,
                mgs: `No existe estudiante con el id: ${id}`
            })
        }
        //si todo va bien y existe el estudiante 
        res.status(200).json({
            success: true,
            msg: "El estudiante fue eliminado con exito"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al eliminar el estudiante'
        })
    }
}
