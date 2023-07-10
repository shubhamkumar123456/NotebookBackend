const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
// const mongoUri ="mongodb://0.0.0.0:27017/Notebook"
const mongoUri ="mongodb+srv://clboy768:RlJAwj9L3dey2JhP@cluster0.whnm8tj.mongodb.net/Notebook?retryWrites=true&w=majority";
const connectToMongo= ()=>{
    mongoose.connect(mongoUri,()=>{
        console.log("connected to mongoose successfully")
    })
}
module.exports= connectToMongo;