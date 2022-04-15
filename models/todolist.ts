

import { DataTypes, UUIDV4 } from 'sequelize';
import { sequelize } from '.';

import {TodoListInstance} from "../types/todolist.types"

const TodoList = sequelize.define<TodoListInstance>(
  'Todolist',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
      type: DataTypes.UUID,
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  }
);

export default TodoList;