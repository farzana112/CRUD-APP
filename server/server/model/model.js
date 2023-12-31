import mongoose from "mongoose"
const schema=new mongoose.Schema(
    {
        name: {
            type:String,
            required:true
        },

        email: {
            type:String,
            required:true,
            unique:true
        },
        gender: {
            type:String,
            required:true
        },
        status: {
            type:String,
            required:true

        },
    },
    {timestamps:true}
)

const Customer=mongoose.model('customers',schema)

export default Customer ;