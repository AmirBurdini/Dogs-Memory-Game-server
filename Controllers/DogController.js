const express = require('express')
const appRouter = express.Router()
const axios = require('axios')
appRouter.use(express.json())

const DogBL = require('../Models/DogBL')

// get *amount* images
appRouter.route('/:amount').get( async(req,resp) => {

    let num = Number(req.params.amount)
    let games = await DogBL.getAll()
    let res = [...games]
    
    if (games.length < num) {
    
        res = res.concat(await fetchImages(num - games.length))
    }

    return resp.json(res)
})

// add a dog to the DB
appRouter.route('/').post( async(req,resp) => {

    let dogObj = req.body;
    let dog = await DogBL.addDog(dogObj);
    return resp.json(dog);
})

// get more dog images if not enough stored locally
let fetchImages = async(num) => {
    
    let extra_dogs = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)

    extra_dogs = extra_dogs.data.message 

    let res = []
    extra_dogs.forEach( async(url) => {

        let obj = {

            breed : url.split('/')[4],
            img : Buffer.from(url),
        }

        let new_dog = await DogBL.addDog(obj)
        res.push(new_dog)
    })

    return res
}

module.exports = appRouter;