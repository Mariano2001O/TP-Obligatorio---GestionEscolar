const profesoresModel = require('./../models/profesoresModel') // traemos todo lo que tiene dentro 

// los controladores se encargan de la parte logica

exports.getProfesores = async (req, res) => {
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const profesores = await profesoresModel.obtenerProfesores();

        //si todo va bien respondemos con los Profesor, del lado del cliente
        //lo obtenemos con json
        //status 200 que todo fue ok
        res.status(200).json({
            success: true,
            data: profesores
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
exports.getProfesorById = async (req, res) => { //(Propuestas tipo get "traen informacion") Profesor por id
    const id = req.params.id;
    try {
        const profesores = await profesoresModel.getProfesorById(id)

        if (profesores.length < 1) {
            res.status(404).json({
                success: false,
                msg: `NO EXISTE: ${id}`
            })

        }
        res.status(200).json({
            success: true,
            profesores

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

exports.addProfesor = async (req, res) => { //propuesta tipo post, Envia informacion
    const nuevoprofesor = req.body;
    try {
        const id = await profesoresModel.addProfesor(nuevoprofesor)
        res.status(201).json({
            success: true,
            msg: 'anduvo crack',
            nuevoprofesor
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

exports.updateProfesor = async (req, res) => {  //propuesta tipo put. Actualiza datos
        const id = req.params.id;
        const profesorActualizado = req.body;
    
        const profesor = {
            id,
            ...profesorActualizado  //muestra todo lo que necesitamos de forma mas breve
        }
        console.log(profesor)
        try {
            const listaActualizada = await profesoresModel.updateProfesor(profesor)
            if (listaActualizada < 1) {
                res.status(404).json({
                    success: false,
                    message: "datos no actualizados"
                })
            }
            res.status(200).json({
                success: true,
                message: "lista actualizada",
                profesor
            })
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "No andaaaaaaaaaaaaa"
            })
        }
    }
exports.deleteProfesorById = async (req, res) => { // peticion delete Borra informacion
    const id = req.params.id;
    try {
        const profesor = await profesoresModel.deleteProfesorById(id)

        if (profesor.length < 1) { //pregunto si existe el Profesor
            res.status(404).json({
                success: false,
                mgs: `No existe Profesor con el id: ${id}`
            })
        }
        //si todo va bien y existe el Profesor 
        res.status(200).json({
            success: true,
            msg: "El Profesor fue eliminado con exito"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al eliminar el Profesor'
        })
    }
}
