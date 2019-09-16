import _listService from '../services/ListService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'

//PUBLIC
export default class ListController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('/boards/:boardId', this.getByBoardId)
      .post('/boards/:boardId', this.create)
      .put('/boards/:boardId/:listId', this.edit)
      .delete('/boards/:boardId/:listId', this.delete)
      .use(this.defaultRoute)
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getByBoardId(req, res, next) {
    try {
      let data = await _listService.findOne({ boardId: req.params.boardId, authorId: req.session.uid })
      return res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      if (req.body.authorId === req.session.uid) {
        let data = await _listService.create(req.body)
        return res.status(201).send(data)
      }
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await _listService.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, req.body, { new: true })
      if (data) {
        return res.send(data)
      }
      throw new Error("invalid id")
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      await _listService.findOneAndRemove({ _id: req.params.id, authorId: req.session.uid })
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
}
