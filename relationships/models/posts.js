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
    username:String,
    email:String,
});
const postSchema = new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});
const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);
const addData = async() => {
    let user1 = new User({
        username:"rahulkumar",
        email:"vyhsnvai@gmail.com",
    });
    let post1 = new Post({
        content:"Hello world",
        likes:7,
    });
    post1.user = user1;
    await user1.save();
    await post1.save();
};
addData();