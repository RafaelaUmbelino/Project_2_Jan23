// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
	console.log('Project_2_jan23 JS imported successfully!');
});

/* const router = require("express").Router(); */
/* const Restaurant = require("../../models/Restaurant.model"); */

let autocomplete;
function initAutocomplete() {
	autocomplete = new google.maps.places.Autocomplete(
		document.getElementById('autocomplete'),
		{
			types: ['establishment'],
			componentRestrictions: { country: ['PT'] },
			fields: [
				'place_id',
				'name',
				/* 'business_status', 'opening_hours', 'photos', 'price_level', 'rating', */ 'url',
				'adr_address',
				'website',
			],
		},
	);

	autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
	let place = autocomplete.getPlace();
	let {
		place_id,
		name,
		business_status,
		opening_hours,
		photos,
		price_level,
		rating,
		url,
		adr_address,
		website,
	} = place;
	if (!place.place_id) {
		document.getElementById('autocomplete').placeholder =
			'Search for a place';
	} else {
		document.getElementById('res-name').innerHTML = name;
		document.getElementById('res-address').innerHTML = adr_address;
		document.getElementById('res-maps-url').setAttribute('href', url);
		document.getElementById('res-maps-url').innerHTML = 'Google Maps site';
		if (website) {
			document
				.getElementById('res-website')
				.setAttribute('href', website);
			document.getElementById('res-website').innerHTML = 'Website';
		}
    
			/*     document.getElementById('res-rating').innerHTML = rating;
    		document.getElementById('res-price-level').innerHTML = price_level;
    		document.getElementById('res-status').innerHTML = business_status; */
/* 		async function createRestaurant() {
			try {
				await Restaurant.create({ place_id, name, business_status, opening_hours, photos, price_level, rating, url, adr_address, website });
			} catch (error) {
				console.log(error);
				next(error);
			}
		}
		createRestaurant(); */
		document.getElementById('wishlist-add').innerHTML = `<button type="submit">Add to Wishlist</button>`;
    	const wish_form_place_id = document.getElementsByName('wish_form_place_id')
		if (wish_form_place_id) {wish_form_place_id.value = place_id}
    	const wish_form_name = document.getElementsByName('wish_form_name');
		if (wish_form_name) {wish_form_name.value = name}
		const wish_form_business_status = document.getElementsByName('wish_form_business_status');
		if (wish_form_business_status) {wish_form_business_status.value = business_status}
		const wish_form_opening_hours = document.getElementsByName('wish_form_opening_hours');
		if (wish_form_opening_hours) {wish_form_opening_hours.value = opening_hours}
		const wish_form_photos = document.getElementsByName('wish_form_photos');
		if (wish_form_photos) {wish_form_photos.value = photos}
		const wish_form_price_level = document.getElementsByName('wish_form_price_level');
		if (wish_form_price_level) {wish_form_price_level.value = price_level}
		const wish_form_rating = document.getElementsByName('wish_form_rating');
		if (wish_form_rating) {wish_form_rating.value = rating}
		const wish_form_url = document.getElementsByName('wish_form_url');
		if (wish_form_url) {wish_form_url.value = url}
		const wish_form_adr_address = document.getElementsByName('wish_form_adr_address');
		if (wish_form_adr_address) {wish_form_adr_address.value = adr_address}
		const wish_form_website = document.getElementsByName('wish_form_website');
		if (wish_form_website) {wish_form_website.value = website}

		document.getElementById(
			'favorites-add',
		).innerHTML = `<button type="submit">Add to Favorites</button>`;

		/*     document.getElementById('res-photo').innerHTML = place.photos[0].photo_reference;
    document.getElementById('res-photo').setAttribute('href', place.url.photos[0].getUrl());
    document.getElementById('res-photo').innerHTML = 'photo';
    console.log(place.opening_hours) */
	}
}
