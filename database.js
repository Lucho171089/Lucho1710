const {Sequelize} = require('sequelize');

//Exportinf models
const NoteModel = require('./models/Note');


// Database connection
const sequelize = new Sequelize ('<database>', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    loggin: false,
})


//Adding models
const models = [NoteModel];

//Registering models to Sequelize
for (let model of models){
    model(sequelize)
}

module.exports = sequelize;