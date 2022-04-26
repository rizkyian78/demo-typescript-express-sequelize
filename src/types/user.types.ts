import { Model, Optional, DataTypes } from 'sequelize';

export interface UserAttributes {
  id: string;
  name: string;
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, 'id'> {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
      createdAt?: Date;
      updatedAt?: Date;
  }