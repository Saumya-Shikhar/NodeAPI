import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    ContactNumber:Number,
    Branch:String,
    Address:String
});

const productModel = mongoose.model('colleges',productSchema);
export default productModel;