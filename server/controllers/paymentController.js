import{instance} from "../server.js"


export const checkout =async (req,res)=>{
    const options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      const order = await instance.order.create(options)

      console.log(order);
      res.status(200).jason({
        sucess:true,
      })
      
};