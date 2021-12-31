import mongoose from 'mongoose'

const userSchema = new Schema ({
    email: String,
    password: String,

})

export default userSchema
