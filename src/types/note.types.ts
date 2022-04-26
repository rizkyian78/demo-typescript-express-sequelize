import { Model, Optional, DataTypes } from 'sequelize';

export interface NoteAttibutes {
  id: string;
  name: string;
  userId: string;
}

export interface NoteCreationAttributes
  extends Optional<NoteAttibutes, 'id'> {}

export interface NoteInstance
  extends Model<NoteAttibutes, NoteCreationAttributes>,
    NoteAttibutes {
      createdAt?: Date;
      updatedAt?: Date;
  }