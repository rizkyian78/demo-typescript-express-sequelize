import express from 'express';
import TodoController from '../controller/todolist';
import { Authorization } from '../middleware/auth';

const route = express.Router()

route.post("/coba",Authorization, TodoController.createTodo)



export default route