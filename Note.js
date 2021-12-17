const {DataTypes} = require('sequelize');

//en mariadb podemos crear una tabla llamada Notes

const NoteModel = (sequelize) => sequelize.define({
id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
heading: DataTypes.STRING,
content: DatatTypes.TEXT


});





module.exports = Notemodel