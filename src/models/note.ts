

import { DataTypes, UUIDV4 } from 'sequelize';
import { sequelize } from '.';

import {NoteInstance} from "../types/note.types"
import User from './user';

const Note = sequelize.define<NoteInstance>(
  'Notes',
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
    userId: {
      allowNull: true,
      type: DataTypes.STRING,
    }
  }
);

export default Note;