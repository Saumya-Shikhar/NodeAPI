import mongoose from 'mongoose';

mongoose.connect('mongodb://0.0.0.0:27017/Student')
.then(() => {
    console.log('connection successfull');
})
.catch((error) => {
    console.log(`Error : ${error}`)
});