import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/Student')
.then(() => {
    console.log('connection successfull');
})
.catch((error) => {
    console.log(`Error : ${error}`)
});