const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const Restaurant = require("../models/Restaurant.model");
const User = require("../models/User.model");

router.post('/:id/wishlist',isLoggedIn, async (req, res, next) => {
	try {
		const { _id } = req.session.currentUser;
		const {
			wish_form_place_id: place_id,
			wish_form_name: name,
			wish_form_opening_hours: opening_hours,
			wish_form_photos: photos,
			wish_form_price_level: price_level,
			wish_form_rating: rating,
			wish_form_url: url,
			wish_form_adr_address: adr_address,
			wish_form_website: website,
		} = req.body;
/* 		console.log(_id);
		console.log(place_id);
		console.log(req.body);
		console.log(name);
		console.log(opening_hours); */

		const restaurantSearched = await Restaurant.findOne({ place_id });
		console.log(restaurantSearched)
		if (restaurantSearched) {
			await User.findByIdAndUpdate(_id, {$push: {wishlist: restaurantSearched._id}})
			console.log('restaurant found')
		} else {
			console.log("no restaurant found")
			await Restaurant.create({ 
				place_id, 
				name,
				opening_hours,
				photos,
				price_level,
				rating,
				url,
				adr_address,
				website,
			});
			const newRestaurant = await Restaurant.findOne({ place_id });
			await User.findByIdAndUpdate(_id, {$push: {wishlist: newRestaurant._id}})
			console.log(newRestaurant);
		}
	} catch (error) {
		console.log(error);
		next(error);
	}
});

router.post('/:id/favorites',isLoggedIn, async (req, res, next) => {
	try {
		const { _id } = req.session.currentUser;
		const {
			wish_form_place_id,
			wish_form_name,
			wish_form_opening_hours,
			wish_form_photos,
			wish_form_price_level,
			wish_form_rating,
			wish_form_url,
			wish_form_adr_address,
			wish_form_website,
		} = req.body;
		console.log(_id);
		console.log(req.body);
		console.log(wish_form_place_id);
		console.log(wish_form_website);
/* 		const restaurant = await Restaurant.findOne({ place_id: googleId });
		if (restaurant) {
		} */
	} catch (error) {
		console.log(error);
		next(error);
	}
});



module.exports = router;
