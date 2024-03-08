import modelProduct from "./model.js";

export const getItem = async(req,res) => {
    try{
        const data = await modelProduct.find({}, {_id:0, __v:0});
        res.status(222).send({
            status: "Success",
            response: data
        })
    }
    catch(error){
        res.status(500).send({
            status: "Data Not found",
            response: error.message
        })
    }
}

export const setItem  = async(req,res) => {
    try{
        const data = new modelProduct(req.body);
        const update_data = await data.save();
        res.status(201).send({
            status: "Data saved Successfully",
        })
    }
    catch(error){
        res.status(590).send({
            status:"Fatal",
            message: "Internal server error",
            response: error.message
        })
    }
}