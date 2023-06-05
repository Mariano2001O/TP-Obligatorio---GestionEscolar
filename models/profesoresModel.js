const db = require('./../config/db');
const { Router } = require("express");
// tiene que ser asincronica porque todo se ejecuta al mismo tiempo y de esa manera anda
// el console log 
exports.obtenerProfesores = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM profesores')
    console.log(rows)
    return rows;
}

exports.getProfesorById = async (id) => {
    const [rows,fields] = await db.execute ('SELECT nombre, especialidad, email FROM profesores WHERE id=?',[id]);
    console.log(rows)
    return rows;
}

exports.addProfesor = async (nuevoprofesor) => {
    const {rows, fields} = await db.execute('INSERT INTO profesores (nombre, especialidad, email) values (?,?,?)', [nuevoprofesor.nombre, nuevoprofesor.especialidad, nuevoprofesor.email]);
    return rows;
}
exports.updateProfesor = async (profesor) => {
    const [rows, fields] = await db.execute('UPDATE profesores SET nombre = ?, especialidad = ?, email = ? WHERE id = ?', [profesor.nombre, profesor.especialidad, profesor.email, profesor.id]);
    return rows;
}

exports.deleteProfesorById = async (id) => {
    const [rows, fields] = await db.execute('DELETE FROM profesores WHERE id = ?', [id]);
    return rows;
}

