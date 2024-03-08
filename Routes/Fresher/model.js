import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    Name:String,
    MobileNumber:Number,
    Email:String,
    SchoolName:String
})

const modelProduct = mongoose.model('Freshers', productSchema);
export default modelProduct