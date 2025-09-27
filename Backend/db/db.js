require("dotenv").config()
const mongoose = require("mongoose")
const connection = `mongoose.connect("mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vs4lxeu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0")`
const userSchema = mongoose.Schema(
    {
        name: String,
        email:String,
        course: String,
        age: Number,
        mobile: Number,
        gender:String

    },
    {
        versionKey: false,
    }
);

const UserModel = mongoose.model("userDetails", userSchema);


module.exports = {
    connection,
    UserModel
}