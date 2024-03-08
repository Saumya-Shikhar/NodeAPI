import productModel from './model.js';

export const getData = async(req,res) => {
    try{
        const data = await productModel.find({},{_id:0, __v:0});
        console.log("DATA: ",data);
        res.status(210).send({
            status: 'Success',
            response: data
        })
    }
    catch(error){
        res.send({
            status: 'Fatal',
            message: 'Internal Server Error',
            Error: error.message
        })
    }
};

export const setData = async(req,res) => {
    try{
        const data = new productModel(req.body);
        const save_data = await data.save();
        res.status(200).send({
            status: 'Data Saved Successfully'
        });
    }
    catch(error){
        res.status(510).send({
            status: "Data saving failure",
            response: error.message
        })
    }   
}