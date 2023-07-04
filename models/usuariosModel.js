const db = require('./../config/db');
const { Router } = require("express");
// tiene que ser asincronica porque todo se ejecuta al mismo tiempo y de esa manera anda
// el console log 
exports.obtenerUsuarios = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM usuarios')
    console.log(rows)
    return rows;
}

exports.getUsuariosById = async (id) => {
    const [rows, fields] = await db.execute('SELECT username, PASSWORD FROM usuarios WHERE id=?', [id]);
    console.log(rows)
    return rows;
}

exports.addUsuarios = async (nuevoUsuario) => {
    const { rows, fields } = await db.execute('INSERT INTO usuarios (username, PASSWORD) values (?,?)', [nuevoUsuario.username, nuevoUsuario.PASSWORD]);
    return rows;
}
exports.updateUsuarios = async (usuarios) => {
    const [rows, fields] = await db.execute('UPDATE usuarios SET username = ?, PASSWORD = ? WHERE id = ?', [usuarios.username, usuarios.PASSWORD, usuarios.id]);
    return rows;
}

exports.deleteUsuariosById = async (id) => {
    const [rows, fields] = await db.execute('DELETE FROM usuarios WHERE id = ?', [id]);
    return rows;
}


