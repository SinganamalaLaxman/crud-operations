const mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
    firstName:string,
    lastName:string,
    age:Number,
    email:string,
    mobileNo:string,
    gender:string,
    rollNo:string,
});


let Student = new mongoose.model(`students`,studentSchema);

let insertDataInToMDB = async()=>{

    try{
        let lakshman = new Student({
            firstName:"Lakshman",
            lastName:"Singanamala",
            age:28,
            email:"lakshmansinganamala9703@gmail.com",
            mobileNo:"91-9703926768",
            gender:"Male",
            rollNo:"10",
    
        });
    
        await lakshman.save();   //save one object only 
        //Student.insertMany([lakshman]);  save mutliple objects.
        console.log("Succesfully Inserted Data Into Database");
        insertDataInToMDB();


    }catch(err){
        console.log("Unable To Insert Data Into Database");
    }
    
};



let connectToMDB = async()=>{

    try{
        await mongoose.connect("mongodb+srv://lakshmansinganamala9703:9703926768@cluster0.xkuag1p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Succesfully connected to MDB");


    }catch(err){
        console.log("Unable to Connect to MDB");
    }


  

}
connectToMDB();