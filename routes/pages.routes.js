const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant.model");
const User = require("../models/User.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const Review = require("../models/Review.model");

// router.get("/restaurant/details/:restaurantid", (req, res, next) => {
//   res.render("restaurantDetails");
// });

router.get("/:id/favorites", isLoggedIn, async (req, res, next) => {
  // aceder só ao id do user, para aceder à lista e fazer o populate.
  try {
    let { _id } = req.session.currentUser;

    const user = await User.findById(_id).populate("favorites");

    res.render("auth/favorites",  user );
  } catch (error) {
    console.log(error);
    next(error);
  }
});
//

router.get("/:id/wishlist", isLoggedIn, async (req, res, next) => {
  try {
    // aceder só ao id do user, para aceder à lista e fazer o populate.

    let { _id } = req.session.currentUser;

    const userWishlist = await User.findById(_id).populate("wishlist");

    

    res.render("auth/wishlist", userWishlist);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/wishtofavorites/:id", isLoggedIn, async(req, res, next) => {
 try {
 
  let restaurantId = req.params.id;
  let userId = req.session.currentUser._id;
  console.log(userId);
  console.log(restaurantId);
  await User.findByIdAndUpdate(userId, {$pull: {wishlist: restaurantId } });
  await User.findByIdAndUpdate(userId, {$push: {favorites: restaurantId } });

  res.redirect(`/${userId}/favorites`);

} catch (error) {
  console.log(error);
  next(error);
  
}

});




// router.get("/wishlist", isLoggedIn, (req, res, next) => {
//   res.render("wishlist");
// });

router.post("/:id/review", isLoggedIn, async (req, res, next) => {
  try {
    let { id } = req.session.currentUser;

    const userReview = await User.findById(_id).populate("review");

    res.render("auth/favorites", { userReview });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/restaurant/:id", isLoggedIn, async (req, res, next) => {
  // cast is the array of IDs and we need full object so we need to use
  // .populate('cast) and pass the "cast" in the method because we are populating that specific field

  try {
    const {id} = req.params;  

    let restaurant = await Restaurant.findById(id)

    res.render("auth/restaurantDetails", restaurant);

  } catch (error) {
    console.log(error);
    next(error);
  }
});



//Delete button apenas nas listas do user fetch

/* router.post ('/:id/delete', async (req,res,next)=> {
    let { id } = req.session.currentUser;
    const removeFavorite = await User.findByIdAndUpdate({ id }.populate("favorites"), {$pull: Restaurant.findById(req.params.id)})

    res.redirect("/:id/favorites");

});

router.post ('/:id/delete', async (req,res,next)=> {
    let { id } = req.session.currentUser;
    const removeWishlist = await User.findByIdAndUpdate({ id }.populate("wishlist"), {$pull: Restaurant.findById(req.params.id)})

    res.redirect("/:id/wishlist");

}); */

module.exports = router;
