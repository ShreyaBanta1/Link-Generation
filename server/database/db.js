import mongoose from 'mongoose';

const MONGODB_URI=`mongodb+srv://Shreyabanta:Shreya1204@cluster0.giwzyfs.mongodb.net/File`;
const DBConnection = async() => {
    try{
       await mongoose.connect(MONGODB_URI, { useNewUrlParser: true});
        console.log("Database connected Successfully");
    }catch(error){
        console.error('Error while connecting with the database', error.message);
    }
}
export default DBConnection;