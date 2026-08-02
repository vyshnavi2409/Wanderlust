const Listing = require("../models/listing");
//get
module.exports.index = async (req, res) => {
    let filter = {};
    if (req.query.category) {
        filter.category = req.query.category;
    }
    if (req.query.q) {
        filter.$or = [
            { title: { $regex: req.query.q, $options: "i" } },
            { location: { $regex: req.query.q, $options: "i" } },
            { country: { $regex: req.query.q, $options: "i" } }
        ];
    }
    const allListings = await Listing.find(filter); // ✅ FIXED
    res.render("listings/index.ejs", { allListings });
}
//new form
module.exports.renderNewForm = (req, res) => {
   
    if(!req.isAuthenticated()){
        req.flash("error","you must be logged in to create listing!");
        return res.redirect("/login");
    }
    res.render("listings/new.ejs");
};
//show route
module.exports.showListing = async (req, res) => {
    const { id } = req.params;

    const findListing = await Listing.findById(id).populate(
        {path: "reviews",
            populate: { path :"author",

    },
}).populate("owner"); 

    if (!findListing) {
       req.flash("error","Listing you requested for does not exist!");
       res.redirect("/listings");
    }
     console.log(findListing);
    res.render("listings/show.ejs", { findListing });
};
//creatlisting
module.exports.createListing = async (req, res) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "No listing data received");
    }
    const newListing = new Listing(req.body.listing);
    console.log(req.user);
    newListing.owner = req.user._id; // ✅ FIXED
    await newListing.save();
     req.flash("success","New Listing Created!");
    res.redirect("/listings");
};
//edit
module.exports.editForm = async (req, res) => {
    const { id } = req.params;

    const findListing = await Listing.findById(id); // ✅ FIXED

    if (!findListing) {
        throw new ExpressError(404, "Listing not found");
    }
    
    res.render("listings/edit.ejs", { findListing });
};
//update
module.exports.updateListing = async (req, res) => {
    let { id } = req.params; 
    await Listing.findByIdAndUpdate(id, { ...req.body.listing});
     req.flash("success","listing is updated");
      res.redirect(`/listings/${id}`);
};
//delete
module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;

    await Listing.findByIdAndDelete(id); // ✅ FIXED
      req.flash("success","Listing Deleted");
    res.redirect("/listings");
}