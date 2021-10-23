const Dog = require('./DogSchema')

const getAll = () => {

    return new Promise( (resolve, reject) => {
        
        Dog.find({}, (err, data) => {
            
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const addDog = (dog) => {
    
    return new Promise( (resolve,reject) => {

        let new_dog = new Dog({
            
            breed : dog.breed,
            img : dog.img
        });

        new_dog.save((err) => {
            
            if (err) {
                reject(err)
            }
            else {
                resolve(new_dog)
            }
        })
    })
}


module.exports = {getAll, addDog};