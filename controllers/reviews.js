const Listing = require("../models/listing");
const Review = require("../models/review");


module.exports.createReview = async (req, res) => {
        const { id } = req.params; // ✅ now works

        let listing = await Listing.findById(id);
        if (!listing) {
            throw new ExpressError(404, "Listing not found");
        }

        let newReview = new Review(req.body.review);
        newReview.author = req.user._id;
        console.log(newReview);
        listing.reviews.push(newReview);
              
        await newReview.save();
        await listing.save();

        console.log("new review added");
         req.flash("success","new review created");
        res.redirect(`/listings/${id}`); // ✅ redirect to listing page
    };

    //delete
    module.exports.destroyReview = async (req, res) => {
        const { id, reviewId } = req.params;

        await Listing.findByIdAndUpdate(id, {
            $pull: { reviews: reviewId }
        });

        await Review.findByIdAndDelete(reviewId);
         req.flash("success","A review is deleted");
        res.redirect(`/listings/${id}`);
    };