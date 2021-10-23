const express = require('express')
const appRouter = express.Router()
appRouter.use(express.json())
const GameBL = require('../Models/GameBL')

appRouter.route('/').get( async(req,resp) => {

    let games = await GameBL.getAll()
    return resp.json(games)
})

appRouter.route('/:id').get( async(req,resp) => {
    
    let id = req.params.id
    let game = await GameBL.getGameById(id)

    return resp.json(game)
})

appRouter.route('/').post( async(req,resp) => {

    let gameObj = req.body;
    let game = await GameBL.addGame(gameObj);
    return resp.json(game);
})

appRouter.route('/:id').put( async(req, resp) => {
    
    let gameObj = req.body;
    let id = gameObj.member_id

    let result = await GameBL.updateGame(id, gameObj);
    return resp.json(result);
})

appRouter.route('/:id').delete( async(req,resp) => {

    let id = req.params.id;
    let result = await GameBL.deleteGame(id);
    return resp.json(result);
})

module.exports = appRouter;