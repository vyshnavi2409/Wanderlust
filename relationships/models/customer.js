const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
    try {
        await mongoose.connect(
             "mongodb://vyshnavi:vrushali%40123@127.0.0.1:27017/relationDemo?authSource=admin"
        );
        console.log("MongoDB connection successful");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}
main();

const orderSchema = new Schema({
    item:String,
    price:Number,
});
const customerSchema = new Schema({
    name:String,
    orders:[
        {
        type: Schema.Types.ObjectId,
        ref: "Order",
        },
    ],
});
// customerSchema.pre("findOneAndDelete",async () => {
//    console.log("PRE MIDDLEWARE");
// });
customerSchema.post("findOneAndDelete",async(customer) => {
    if(customer.orders.length) {
        let res = await Order.deleteMany({_id: {$in:customer.orders} });
        console.log(res);
    }
});

const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);
const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result);
};
    findCustomer();

// const addCustomer = async() => {
//     // let cust1 = new Customer({
//     //     name:"Rahul Kumar",
//     // });
//     // let order1 = await Order.findOne({item:"Chips"});
//     // let order2 = await Order.findOne({item:"chocolate"});
//     // cust1.orders.push(order1);
//     // cust1.orders.push(order2);
//     // let result = await cust1.save();
//     // console.log(result);
//     let result = await Customer.find({});
//     console.log(result);
// };
// addCustomer();
// const addorders = async() => {
//     let res = await Order.insertMany([
//      {item:"samosa",price:12},
//      {item:"Chips",price:10},
//      {item:"chocolate",price:40},
//     ]);
//     console.log(res);
// };
// addorders();
const addCust =  async () => {
    let newCust = new Customer({
            name :"vyshnavi nakka",
    });
    let newOrder  = new Order({
        item:"Burger",
        price:250,
    });
    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();
    console.log("addded new customer");
};
// addCust();
const delCust = async () => {
  let data = await Customer.findByIdAndDelete('69c8c8a1e65cd707e9309c11');
     console.log(data);
};
// addCust();
delCust();