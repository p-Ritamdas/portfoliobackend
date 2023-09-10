var express = require('express');
// const UserRouting = require('./Routes');
const mongoose = require('mongoose')
var app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
app.use(cors())

//schema section
const useSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
    type:String,
    required:true,
    
    },
    phone:{
        type:String,
        required:true,
       
    },
    message:{
        type:String,
        required:true,
       
    }
    
})
    

const userModel = mongoose.model("NewsUser", useSchema)
app.use(express.json())



// app.use('/user', UserRouting)


app.post('/send', async (req, res) => {
    const { name, email, phone,message } = req.body
  

        const user = new userModel({
         
            name, email, phone,message
        })
       await user.save()
           console.log(user)

})

app.get('/',(req,res)=>{
    res.send("start")
})


mongoose.connect("mongodb+srv://patmax3050:Pritam6699@cluster0.mg3glix.mongodb.net/websitedata?retryWrites=true&w=majority").then(() => {
    console.log("Mongodb is Connected!")
}).catch(() => {
    console.log("Mongodb is Not Connected ! ")
})


app.listen(port, function () {
    console.log('Node server is running..');
});
