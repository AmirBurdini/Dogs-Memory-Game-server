const Game = require('./GameSchema')

const getAll = () => {

    return new Promise( (resolve, reject) => {
        
        Game.find({}, (err, data) => {
            
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const getGameById = (id) => {
    
    return new Promise( (resolve, reject) => {
        
        Game.findById(id, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const addGame = (game) => {
    
    return new Promise( (resolve,reject) => {

        let new_game = new Game({
            id : game.id,
            player : game.player,
            date : game.date,
            time : game.time,
            moves : game.moves,
            score : game.score
        });

        new_game.save((err) => {
            
            if (err) {
                reject(err)
            }
            else {
                resolve(new_game)
            }
        })
    })
}

const updateGame = (id, game) => {

    return new Promise( (resolve, reject) => {
        Game.findByIdAndUpdate(id, {
            id : game.id,
            player : game.player,
            date : game.date,
            time : game.time,
            moves : game.moves,
            score : game.score
        },(err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("updated Successfully")
            }
        })
    })
}

const deleteGame = (id) => {

    return new Promise( (resolve, reject) => {
        Game.findByIdAndDelete(id,(err) => {
            if(err){
                reject(err)
            }
            else {
                resolve("Removed Successfully")
            }
        })
    })
}

module.exports = {getAll, getGameById, addGame, updateGame, deleteGame};