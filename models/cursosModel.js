const db = require('./../config/db');
const { Router } = require("express");
// tiene que ser asincronica porque todo se ejecuta al mismo tiempo y de esa manera anda
// el console log 
exports.obtenerCursos = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM cursos')
    console.log(rows)
    return rows;
}

exports.getCursoById = async (id) => {
    const [rows,fields] = await db.execute ('SELECT nombre, descripcion FROM cursos WHERE id=?',[id]);
    console.log(rows)
    return rows;
}

exports.addCurso = async (nuevocurso) => {
    const {rows, fields} = await db.execute('INSERT INTO cursos (nombre, descripcion) values (?,?)', [nuevocurso.nombre, nuevocurso.descripcion]);
    return rows;
}
exports.updateCurso = async (curso) => {
    const [rows, fields] = await db.execute('UPDATE cursos SET nombre = ?, descripcion = ? WHERE id = ?', [curso.nombre, curso.descripcion, curso.id]);
    return rows;
}

exports.deleteCursoById = async (id) => {
    const [rows, fields] = await db.execute('DELETE FROM cursos WHERE id = ?', [id]);
    return rows;
}


