

import { DataTypes, UUIDV4 } from 'sequelize';
import { sequelize } from '.';

import {UserInstance} from "../types/user.types"
import Note from './note';

const User = sequelize.define<UserInstance>(
  'Users',
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


User.hasMany(Note, {foreignKey: "userId",as: "nota"})

export default User;