const fs = require('fs');
const path = require('path');


fs.writeFileSync(path.join(__dirname, 'ejemplo_2.txt'), 'Este es el contenido de mi archivo sincrono',{encoding: 'utf-8'}, (err) => {
    if (err) throw err;
    console.log('writeFileSync: Archivo creado!')

} )

data = fs.readFileSync(path.join(__dirname, 'ejemplo_2.txt'), {encoding: 'utf-8'})
console.log('readFileSync: ', data);


fs.appendFileSync(path.join(__dirname, 'ejemplo_2.txt'), '\n Esto es una segunda nueva linea');
console.log('appendFile','Archivo actualizado!')
