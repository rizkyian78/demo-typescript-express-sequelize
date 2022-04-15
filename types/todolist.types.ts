import { Model, Optional, DataTypes } from 'sequelize';

export interface TodoListAttributes {
  id: string;
  name: string;
}

export interface TodoListCreationAttributes
  extends Optional<TodoListAttributes, 'id'> {}

export interface TodoListInstance
  extends Model<TodoListAttributes, TodoListCreationAttributes>,
    TodoListAttributes {
      createdAt?: Date;
      updatedAt?: Date;
  }