const cursosModel = require('./../models/cursosModel') // traemos todo lo que tiene dentro  

// los controladores se encargan de la parte logica

exports.getCursos = async (req, res) => {
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const cursos = await cursosModel.obtenerCursos();

        //si todo va bien respondemos con los Cursos, del lado del cliente
        //lo obtenemos con json
        //status 200 que todo fue ok
        res.status(200).json({
            success: true,
            data: cursos
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
exports.getCursoById = async (req, res) => { //(Propuestas tipo get "traen informacion") curso por id
    const id = req.params.id;
    try {
        const curso = await cursosModel.getCursoById(id)

        if (curso.length < 1) {
            res.status(404).json({
                success: false,
                msg: `NO EXISTE: ${id}`
            })

        }
        res.status(200).json({
            success: true,
            curso

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

exports.addCurso = async (req, res) => { //propuesta tipo post, Envia informacion
    const nuevocurso = req.body;
    try {
        const id = await cursosModel.addCurso(nuevocurso)
        res.status(201).json({
            success: true,
            msg: 'anduvo crack',
            nuevocurso
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

exports.updateCurso = async (req, res) => {  //propuesta tipo put. Actualiza datos
        const id = req.params.id;
        const cursoActualizado = req.body;
    
        const curso = {
            id,
            ...cursoActualizado  //muestra todo lo que necesitamos de forma mas breve
        }
        console.log(curso)
        try {
            const listaActualizada = await cursosModel.updateCurso(curso)
            if (listaActualizada < 1) {
                res.status(404).json({
                    success: false,
                    message: "datos no actualizados"
                })
            }
            res.status(200).json({
                success: true,
                message: "lista actualizada",
                curso
            })
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "No andaaaaaaaaaaaaa"
            })
        }
    }
exports.deleteCursoById = async (req, res) => { // peticion delete Borra informacion
    const id = req.params.id;
    try {
        const curso = await cursosModel.deleteCursoById(id)

        if (curso.length < 1) { //pregunto si existe el curso
            res.status(404).json({
                success: false,
                mgs: `No existe curso con el id: ${id}`
            })
        }
        //si todo va bien y existe el curso 
        res.status(200).json({
            success: true,
            msg: "El curso fue eliminado con exito"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al eliminar el curso'
        })
    }
}
