const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/loginpage")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const logInSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("collection1",logInSchema)

module.exports=collection