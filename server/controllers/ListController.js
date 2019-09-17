import ListService from '../services/ListService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import TaskService from '../services/TaskService'

let _listService = new ListService().repository
let _taskService = new TaskService().repository

//PUBLIC
export default class ListController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('/:id/tasks', this.getTasks)
      .post('', this.create)
      // .put('/boards/:boardId/:listId', this.edit)
      .delete('/:id', this.delete)
      .use(this.defaultRoute)
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getTasks(req, res, next) {
    try {
      let data = await _taskService.find({ listId: req.params.id })
      return res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let data = await _listService.create(req.body)
      res.send(data)
    } catch (err) { next(err) }

  }

  // async edit(req, res, next) {
  //   try {
  //     let data = await _listService.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, req.body, { new: true })
  //     if (data) {
  //       return res.send(data)
  //     }
  //     throw new Error("invalid id")
  //   } catch (error) { next(error) }
  // }

  async delete(req, res, next) {
    try {
      await _listService.findOneAndRemove({ _id: req.params.id, authorId: req.session.uid })
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }






}
