const mongoose = require('mongoose'); 

// Conexión a MongoDB con las opciones correctamente configuradas
mongoose.connect('mongodb+srv://Grupo-12:grupo12@cursadanodejs.ls9ii.mongodb.net/Node-js', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:', error));

// Defino un esquema para los superhéroes:

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: {type: String, required: true},
    nombreReal: {type: String, required: true},
    edad: {type: Number, min: 0},
    planetaOrigen: {type: String, default: 'Desconocido'},
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador: [String],
    createdAt: {type: Date, default: Date.now}
},
{ collection: 'Grupo-12' }); // Aquí defines la colección de cada grupo


const SuperHero = mongoose.model('SuperHeroe', superheroSchema);
/*

// Proceso para insertar un documento (nuevo superhéroe)
 
async function insertSuperHero() {
    const hero = new SuperHero({
        nombreSuperHeroe: 'Lio',
        nombreReal: 'Lionel Messi',
        edad:37,
        planetaOrigen:'Tierra',
        debilidad: 'Lesiones musculares',
        Poderes:["Agilidad extrema", "Precisión impecable", "Visión de juego"],
        aliados:["Barcelona", "PSG", "Selección Argentina"],
        enemigos:["Defensores rivales", "Fatiga"],
        creador: 'José Luis Rizo'
    })
    await hero.save();
    console.log('Superhéroe insertado:', hero);
}

insertSuperHero();
 */
//Función para actualizar los documentos sin reemplazar el documento completo



/* async function updateSuperHero(nombreSuperHeroe) {  
    const result = await SuperHero.updateOne( //updateOne busca el campo SuperHeroe y acualiza el campo edad a 26
        { nombreSuperHeroe: nombreSuperHeroe},
        {$set:{edad: 1987}}
    );
    console.log('Resultado de la actualización:', result);
}
updateSuperHero('Hulk'); */


// Con esta función deleteOne elimino el superheroe Hulk

/* async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({nombreSuperHeroe: nombreSuperHeroe});
    console.log('Superheroe Eliminado', result);
}

deleteSuperHero('Hulk');
 */

//Buscar Documentos

async function findSuperHeroes() {
    const heroes = await SuperHero.find({planetaOrigen: 'Tierra'});
    console.log('Superhéroes encontrados:', heroes);
}
findSuperHeroes();