const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
/* const Restaurant = require("../models/Restaurant.model"); */

router.post('/:id/wishlist',isLoggedIn, async (req, res, next) => {
	try {
		const { _id } = req.session.currentUser;
		const {
			wish_form_place_id,
			wish_form_name,
			wish_form_business_status,
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

router.post('/:id/favorites',isLoggedIn, async (req, res, next) => {
	try {
		const { _id } = req.session.currentUser;
		const {
			wish_form_place_id,
			wish_form_name,
			wish_form_business_status,
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
