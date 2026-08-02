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

const userSchema = new Schema({
    username: String,
    addresses: [
        { 
            _id:false,
            location: String, city: String }
    ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
    try {
        let user1 = new User({
            username: "sherlockholmes",
            addresses: [{ location: "221B Baker Street", city: "London" }]
        });

        user1.addresses.push({ location: "P32 WallStreet", city: "London" });

        let result = await user1.save();
        console.log("User saved:", result);
    } catch (err) {
        console.error("Error saving user:", err);
    } finally {
        mongoose.connection.close();
    }
};

addUsers();