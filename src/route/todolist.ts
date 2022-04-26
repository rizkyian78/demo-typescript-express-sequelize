import express from 'express';
import NoteController from '../controller/note';
import TodoController from '../controller/todolist';
import { Authorization } from '../middleware/auth';

const route = express.Router()

route.post("/coba",Authorization, TodoController.createTodo)
route.post("/note", NoteController.createTodo)
route.get("/note",Authorization, TodoController.getAll)



export default route