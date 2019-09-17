import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
    body: { type: String, required: true },
    authorId: { type: ObjectId, ref: 'User', required: true },
    taskId: { type: ObjectId, ref: 'Task', required: true },
}, { timestamps: true })

//CASCADE ON DELETE
_schema.pre('deleteMany', function (next) {
    //lets find all the lists and remove them
    Promise.all([
        //_commentService.deleteMany({ listId: this._conditions_id }),
    ])
        .then(() => next())
        .catch(err => next(err))
})

//CASCADE ON DELETE
_schema.pre('findOneAndRemove', function (next) {
    //lets find all the lists and remove them
    Promise.all([
        // _commentRepo.deleteMany({ boardId: this._conditions._id })
    ])
        .then(() => next())
        .catch(err => next(err))
})

export default class CommentService {
    get repository() {
        return mongoose.model('Comment', _schema)
    }
}