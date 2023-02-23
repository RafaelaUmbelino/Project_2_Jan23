const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const isLoggedOut = require("../middleware/isLoggedOut");
const router = express.Router();
const Collection = require("../models/Collection.model");
const Restaurant = require("../models/Restaurant.model");
const User = require("../models/User.model");




router.post('/:id/wishlist',isLoggedIn, async (req, res, next) => {
	try {
		const { _id } = req.session.currentUser;
		const user = await User.findById(_id);
		const userWishlist = user.wishlist;
		const {
			wish_form_place_id: place_id,
			wish_form_name: name,
			wish_form_opening_hours: opening_hours,
			wish_form_photos: photos,
			wish_form_price_level: price_level,
			wish_form_rating: rating,
			wish_form_url: url,
			wish_form_formatted_address: formatted_address,
			wish_form_website: website,
		} = req.body;

		const restaurantSearched = await Restaurant.findOne({ place_id });

			if (restaurantSearched) {
				if (!(userWishlist.includes(restaurantSearched._id))) {
					await User.findByIdAndUpdate(_id, {$push: {wishlist: restaurantSearched._id}})
					console.log('restaurant found')
					res.redirect(`/wishlist/${_id}`)
				} else res.redirect(`/wishlist/${_id}`)

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
					formatted_address,
					website,
				});
				const newRestaurant = await Restaurant.findOne({ place_id });
				await User.findByIdAndUpdate(_id, {$push: {wishlist: newRestaurant._id}})
				console.log(newRestaurant);
				res.redirect(`/wishlist/${_id}`)
			}

	} catch (error) {
		console.log(error);
		next(error);
	}
});


router.post('/:id/favorites',isLoggedIn, async (req, res, next) => {
	try {
		const { _id } = req.session.currentUser;
		const user = await User.findById(_id);
		const userFavsList = user.favorites;
		const {
			favs_form_place_id: place_id,
			favs_form_name: name,
			favs_form_opening_hours: opening_hours,
			favs_form_photos: photos,
			favs_form_price_level: price_level,
			favs_form_rating: rating,
			favs_form_url: url,
			favs_form_formatted_address: formatted_address,
			favs_form_website: website,
		} = req.body;
		
		const restaurantSearched = await Restaurant.findOne({ place_id });

		 
			if (restaurantSearched) {
				if (!(userFavsList.includes(restaurantSearched._id))) {
					await User.findByIdAndUpdate(_id, {$push: {favorites: restaurantSearched._id}})
					console.log('restaurant found')
					res.redirect(`/favorites/${_id}`)
				} else res.redirect(`/favorites/${_id}`)
				
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
					formatted_address,
					website,
				});
				const newRestaurant = await Restaurant.findOne({ place_id });
				await User.findByIdAndUpdate(_id, {$push: {favorites: newRestaurant._id}})
				console.log(newRestaurant);
				res.redirect(`/favorites/${_id}`)
			}

	} catch (error) {
		console.log(error);
		next(error);
	}
});

router.post('/:id/create-collection', isLoggedIn, async (req, res, next) => {
	try {
		const { _id } = req.session.currentUser;
		const{name} = req.body;
		const newCollection = await Collection.create({name})
		await User.findByIdAndUpdate(_id, {$push: {collections: newCollection._id}})
		res.redirect(`/collections/${_id}`)
	} catch (error) {
		console.log(error);
		next(error);
	}
})

router.post('/:id/add-to-collection', isLoggedIn, async (req, res, next) => {
	console.log(req.body)
try {
	const collectionId = req.params.id;
	const restaurantId = req.body.restaurant;
	await Collection.findByIdAndUpdate(collectionId, {$push: {restaurants: restaurantId}})
} catch (error) {
	console.log(error);
	next(error);
}
})




module.exports = router;
