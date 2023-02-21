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

router.get("/:id/favorites", isLoggedIn, async (req, res) => {
  // aceder só ao id do user, para aceder à lista e fazer o populate.
  let { _id } = req.session.currentUser;

  const user = await User.findById(_id).populate("favorites");

  res.render("auth/favorites", { user });
});
// .catch((err) =>
//   console.log("Error while displaying a form to create a restaurant: ", err)
// );

router.get("/:id/wishlist", isLoggedIn, async (req, res, next) => {
  try {
    // aceder só ao id do user, para aceder à lista e fazer o populate.
    let { _id } = req.session.currentUser;

    const userWishlist = await User.findById(id).populate("wishlist");

    res.render("auth/wishlist", { userWishlist });
    
  } catch (error) {
    console.log(error);
    next(error);
  }
});


// router.get("/wishlist", isLoggedIn, (req, res, next) => {
//   res.render("wishlist");
// });

router.post("/:id/review", isLoggedIn, async (req, res) => {
  let { id } = req.session.currentUser;

  const userReview = await User.findById(id).populate("review");

  res.render("auth/favorites", { userReview });
});

router.get("/:restaurantId", isLoggedIn, async (req, res) => {
  // cast is the array of IDs and we need full object so we need to use
  // .populate('cast) and pass the "cast" in the method because we are populating that specific field

  const restaurantDetails = await Restaurant.findById(req.params.restaurantId); //.populate('cast')

  res.render("auth/restaurantDetails", { restaurantDetails });
});

//Delete button apenas nas listas do user fetch 

/* router.post ('/:id/delete', async (req,res,next)=> {
    let { id } = req.session.currentUser;
    const removeFavorite = await User.findByIdAndUpdate({ id }.populate("favorites"), {$pull: Restaurant.findById(req.params.restaurantId)})

    res.render("auth/favorites", {removeFavorite});

});

router.post ('/:id/delete', async (req,res,next)=> {
    let { id } = req.session.currentUser;
    const removeWishlist = await User.findByIdAndUpdate({ id }.populate("wishlist"), {$pull: Restaurant.findById(req.params.restaurantId)})

    res.render("auth/wishlist", {removeWishlist});

}); */


module.exports = router;