const express = require("express");
const router = express.Router();
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const Restaurant = require("../models/Restaurant.model");
const User = require("../models/User.model");
const Collection = require("../models/Collection.model");
const Review = require("../models/Review.model");

//----------------------------------------------------------------------- GET ROUTES ⤵

// router.get("/restaurant/details/:restaurantid", (req, res, next) => {
//   res.render("restaurantDetails");
// });

router.get("/favorites/:id", isLoggedIn, async (req, res, next) => {
  try {
    let { _id } = req.session.currentUser;
    const user = await User.findById(_id).populate("favorites collections");

    res.render("auth/favorites", user);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
//

router.get("/wishlist/:id", isLoggedIn, async (req, res, next) => {
  try {
    let { _id } = req.session.currentUser;

    const user = await User.findById(_id).populate("wishlist collections");

    res.render("auth/wishlist", user);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/collections/:id", isLoggedIn, async (req, res, next) => {
  try {
    let { _id } = req.session.currentUser;
    const user = await User.findById(_id).populate("collections");
    res.render("auth/user-collections", user);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/collection/:id", isLoggedIn, async (req, res, next) => {
  try {
    let { id } = req.params;
    const collection = await Collection.findById(id).populate("restaurants");
    res.render("auth/collection-details", collection);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

/* router.get("/restaurant/:id", isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.params;

    let restaurant = await Restaurant.findById(id);

    res.render("auth/restaurantDetails", restaurant);
  } catch (error) {
    console.log(error);
    next(error);
  }
}); */

//----------------------------------------------------------------------- POST/EDIT ROUTES ⤵

router.post("/wishtofavorites/:id", isLoggedIn, async (req, res, next) => {
  try {
    let restaurantId = req.params.id;
    let userId = req.session.currentUser._id;
    await User.findByIdAndUpdate(userId, { $pull: { wishlist: restaurantId } });
    await User.findByIdAndUpdate(userId, {
      $push: { favorites: restaurantId },
    });

    res.redirect(`/${userId}/favorites`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

/* router.post("/:id/review", isLoggedIn, async (req, res, next) => {
  try {
    let { id } = req.session.currentUser;

    const userReview = await User.findById(_id).populate("review");

    res.render("auth/favorites", { userReview });
  } catch (error) {
    console.log(error);
    next(error);
  }
}); */

//----------------------------------------------------------------------- DELETE ROUTES ⤵

router.post("/:id/deleteFavorites", async (req, res, next) => {
  try {
    let restaurantId = req.params.id;
    let { _id } = req.session.currentUser;

    const removeFavorite = await User.findByIdAndUpdate(
      { _id },
      { $pull: { favorites: restaurantId } }
    );

    res.redirect(`/${_id}/favorites`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/:id/deleteWishlist", async (req, res, next) => {
  try {
    let restaurantId = req.params.id;
    let { _id } = req.session.currentUser;

    const removeWishlist = await User.findByIdAndUpdate(
      { _id },
      { $pull: { wishlist: restaurantId } }
    );

    res.redirect(`/${_id}/wishlist`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/collection/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;
    let userId = req.session.currentUser._id;

    console.log(userId);
    console.log(req.session.currentUser);

    await Collection.findByIdAndDelete(id);
    res.redirect(`/${userId}/collections`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
