import TaskService from '../services/TaskService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import CommentService from '../services/CommentService'

let _taskService = new TaskService().repository
let _commentService = new CommentService().repository

//PUBLIC
export default class TaskController {
    constructor() {
        this.router = express.Router()
            .use(Authorize.authenticated)
            .get('/:id/comments', this.getComments)
            .post('', this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)
            .use(this.defaultRoute)
    }

    defaultRoute(req, res, next) {
        next({ status: 404, message: 'No Such Route' })
    }

    async getComments(req, res, next) {
        try {
            let data = await _commentService.find({ taskId: req.params.id }).populate('taskId').populate('authorId', 'name')
            return res.send(data)
        } catch (error) { next(error) }
    }

    async create(req, res, next) {
        try {
            req.body.authorId = req.session.uid
            let data = await _taskService.create(req.body)
            res.send(data)
        } catch (err) { next(err) }
    }

    async edit(req, res, next) {
        try {
            let data = await _taskService.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, req.body, { new: true })
            if (data) {
                return res.send(data)
            }
            throw new Error("invalid id")
        } catch (error) { next(error) }
    }

    async delete(req, res, next) {
        try {
            await _taskService.findOneAndRemove({ _id: req.params.id, authorId: req.session.uid })
            return res.send("Successfully deleted")
        } catch (error) { next(error) }
    }






}
