const fs = require('fs/promises');

module.exports =
class Contenedor{
    constructor(fileName){
        this.fileName = fileName;
    }

    save(object){
        return this.getAll()
            .then((objects) => {
                let currentObjectId = objects.length + 1;

                let objectsAux = [...objects, {...object, id: currentObjectId}];
                
                fs.writeFile(this.fileName, JSON.stringify(objectsAux, null, 4), 'utf-8')
                    .then(() => {
                        console.log(`Archivo guardado con éxito!`);
                    })
                    .catch((err) => {
                        console.error(err);
                        console.log(`No se pudo guardar el archivo!`);
                    });

                return currentObjectId;
            });
    }

    getById(id){
        return this.getAll()
            .then((object) => object.find((objeto) => objeto.id == id))
            .catch((err) => console.error(err));
    }

    getAll(){
        return fs.readFile(this.fileName, 'utf-8')
            .then((archivo) => JSON.parse(archivo))
            .catch((err) => {
                console.error(`No existe el archivo se creará uno...`)
                return [];
            });
    }

    getRandom(){
        return this.getAll()
                        .then((objetos) => objetos.length)
                            .then((cantidad_objetos) => {
                                let numeroRandom = Math.floor(Math.random() * (cantidad_objetos) + 1) ;
                                return this.getById(numeroRandom) 
                            })
    }

    deleteById(id){
        this.getAll()
            .then((objects) => {
                let objectsAux = objects.filter((object) => object.id !== id);
                fs.writeFile(this.fileName, JSON.stringify(objectsAux, null, 4), 'utf-8')
                    .then(() => console.log(`Se eliminó el objeto con id ${id} del archivo ${this.fileName}`))
                    .catch(() => console.error(`Error al eliminar el objeto`));
            })
            .catch((err) => console.error(err));
    }

    deleteAll(){
        fs.writeFile(this.fileName, [], 'utf-8')
            .then(() => console.log(`Se eliminaron todos los objetos del archivo!`))
            .catch((err) => console.error(err));
    }
}