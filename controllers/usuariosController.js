const usuariosModel = require('./../models/usuariosModel') // traemos todo lo que tiene dentro  

// los controladores se encargan de la parte logica

exports.getUsuarios = async (req, res) => {
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const usuarios = await usuariosModel.obtenerUsuarios();

        //si todo va bien respondemos con los usuarios, del lado del cliente
        //lo obtenemos con json
        //status 200 que todo fue ok
        res.status(200).json({
            success: true,
            data: usuarios
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
exports.getUsuariosById = async (req, res) => { //(Propuestas tipo get "traen informacion") Usuarios por id
    const id = req.params.id;
    try {
        const usuarios = await usuariosModel.getUsuariosById(id)

        if (usuarios.length < 1) {
            res.status(404).json({
                success: false,
                msg: `NO EXISTE: ${id}`
            })

        }
        res.status(200).json({
            success: true,
            usuarios

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

exports.addUsuarios = async (req, res) => { //propuesta tipo post, Envia informacion
    const nuevoUsuario = req.body;
    try {
        const id = await usuariosModel.addUsuarios(nuevoUsuario)
        res.status(201).json({
            success: true,
            msg: 'anduvo crack',
            nuevoUsuario
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

exports.updateUsuarios = async (req, res) => {  //propuesta tipo put. Actualiza datos
    const id = req.params.id;
    const usuariosActualizado = req.body;

    const usuarios = {
        id,
        ...usuariosActualizado  //muestra todo lo que necesitamos de forma mas breve
    }
    console.log(usuarios)
    try {
        const listaActualizada = await usuariosModel.updateUsuarios(usuarios)
        if (listaActualizada < 1) {
            res.status(404).json({
                success: false,
                message: "datos no actualizados"
            })
        }
        res.status(200).json({
            success: true,
            message: "lista actualizada",
            usuarios
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "No andaaaaaaaaaaaaa"
        })
    }
}
exports.deleteUsuariosById = async (req, res) => { // peticion delete Borra informacion
    const id = req.params.id;
    try {
        const usuarios = await usuariosModel.deleteUsuariosById(id)

        if (usuarios.length < 1) { //pregunto si existe el Usuarios
            res.status(404).json({
                success: false,
                mgs: `No existen Usuarios con el id: ${id}`
            })
        }
        //si todo va bien y existe el Usuarios 
        res.status(200).json({
            success: true,
            msg: "El Usuario fue eliminado con exito"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al eliminar el Usuario'
        })
    }
}
