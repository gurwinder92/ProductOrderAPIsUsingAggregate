
const orderModel = require("../userModel/orderModel");
const customerModel = require("../userModel/customerModel");

async function Customer(req, res) {
   try {
    let data =({
      name: req.body.name,
      email: req.body.email,
      location:req.body.location,
      status:req.body.status
    })

    let createUser = await customerModel.create(data);
    return res.status(200).send({
      msg: "ok",
      data: createUser,
    })
    

  }catch(err){
console.log("user allready exist",err);
  }
 }

 
async function createOrder(req, res) {
  try {
    let data =({
      customerId: req.body.customerId,
      productName:req.body.productName,
       Location:req.body.Location,
       amount:req.body.amount,
    })

   let createUser = await orderModel.create(data);
   return res.status(200).send({
     msg: "ok",
     data: createUser,
   });

 }catch(err){
console.log("user allready exist",err);
 }
}

async function getAllOrder(req,res){
  try {
    const get = await orderModel.find( )
    return res.status(200).send({
        msg:"ok",
        data:get
  })
 } catch (error) {
    console.log(error);
  }
  
}

async function totalAmount(req,res){
  try{
     const totalOrder = await orderModel.aggregate ([
      { $match:{"Location":req.body.Location}},
      { $group:{'_id':'productName',totalamount:{$sum:'$amount'}}},
   ] )
    return res.status(200).send({
        msg:"ok",
        data:totalOrder
    })
  
}
  catch(err){
    console.log(err)

  }
}
 
module.exports = {
   Customer,
    createOrder,
    getAllOrder,
    totalAmount
}