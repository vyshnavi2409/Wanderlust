const mongoose = require("mongoose");
const initdata = require("./data.js");

const MONGO_URL = "mongodb://vyshnavi:vrushali%40123@127.0.0.1:27017/wanderlust?authSource=admin";
const listing = require("../models/listing.js");
main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect(MONGO_URL);
}
const initDB = async() => {
    await listing.deleteMany({});
     initdata.data=initdata.data.map((obj) => ({...obj,
        owner:"69f498cb78079b67d3a630b6"}));
    await listing.insertMany(initdata.data);
    console.log("data was initialized");
};
initDB();