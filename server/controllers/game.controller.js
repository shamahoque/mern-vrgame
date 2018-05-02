import Game from '../models/game.model'
import _ from 'lodash'
import errorHandler from './../helpers/dbErrorHandler'


const create = (req, res, next) => {
  const game = new Game(req.body)
  game.maker= req.profile
  game.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.status(200).json(result)
  })
}

const list = (req, res) => {
  Game.find({}).populate('maker', '_id name').sort('-created').exec((err, games) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(games)

  })
}

const listByMaker = (req, res) => {
  Game.find({maker: req.profile._id}, (err, games) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(games)
  }).populate('maker', '_id name')
}

export default {
  create,
  list,
  listByMaker
}
