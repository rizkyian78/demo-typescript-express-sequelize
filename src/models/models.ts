import User from './user'
import Note from './note'

const models = {
    User,
    Note
}


export default models


User.hasMany(Note)