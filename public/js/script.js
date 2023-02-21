// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
	console.log('Project_2_jan23 JS imported successfully!');
});

//----------------------------------------------------------------------- STARTING AUTOCOMPLETE API FUNCTION ⤵

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
				'photos',
				/* 'opening_hours',  'price_level', 'rating', */ 'url',
				'formatted_address',
				'website',
				'serves_wine',
				'serves_breakfast',
				'serves_brunch',
				'serves_dinner',
				'serves_vegetarian_food',
			],
		},
	);

	autocomplete.addListener('place_changed', onPlaceChanged);
}

//----------------------------------------------------------------------- GETTING OBJECT FROM USER SELECTING ESTABLISHMENT ⤵

function onPlaceChanged() {
	let place = autocomplete.getPlace();
	let {
		place_id,
		name,
		opening_hours,
		photos,
		price_level,
		rating,
		url,
		formatted_address,
		website,
		serves_breakfast, 
		serves_brunch, 
		serves_dinner, 
		serves_vegetarian_food, 
		serves_wine
	} = place;

	if (!place.place_id) {
		document.getElementById('autocomplete').placeholder =
			'Search for a place';
	} else {
		document.getElementById('res-name').innerHTML = name;
		document.getElementById('res-formatted_address').innerHTML = formatted_address;
		document.getElementById('res-maps-url').setAttribute('href', url);
		document.getElementById('res-maps-url').innerHTML = 'Google Maps site';
		let photoUrl = photos[0].getUrl();
		document.getElementById('res-photo').setAttribute('src', photoUrl);
		console.log(document.getElementById('res-photo'));
		if (website) {
			document
				.getElementById('res-website')
				.setAttribute('href', website);
			document.getElementById('res-website').innerHTML = 'Website';
		}
    
		/*     document.getElementById('res-rating').innerHTML = rating;
    	document.getElementById('res-price-level').innerHTML = price_level; */

		/*     document.getElementById('res-photo').innerHTML = place.photos[0].photo_reference;
    	document.getElementById('res-photo').setAttribute('href', place.url.photos[0].getUrl());
    	document.getElementById('res-photo').innerHTML = 'photo';
    	console.log(place.opening_hours) */

//----------------------------------------------------------------------- CREATING WISHLIST FORM ⤵

		let wishlistForm = document.getElementById('wishlist-add');
		let wishlistSubmit = document.createElement('button')
		wishlistSubmit.innerHTML = 'Add to Wishlist';
		wishlistSubmit.setAttribute('type', 'submit');
		wishlistForm.appendChild(wishlistSubmit)

    	const wish_form_place_id = document.getElementById('wish_form_place_id')
		if (place_id) {wish_form_place_id.value = place_id}
    	const wish_form_name = document.getElementById('wish_form_name');
		if (name) {wish_form_name.value = name}
		const wish_form_opening_hours = document.getElementById('wish_form_opening_hours');
		if (opening_hours) {wish_form_opening_hours.value = opening_hours}
		const wish_form_photos = document.getElementById('wish_form_photos');
		if (photoUrl) {wish_form_photos.value = photoUrl}
		console.log(wish_form_photos.value)
		const wish_form_price_level = document.getElementById('wish_form_price_level');
		if (price_level) {wish_form_price_level.value = price_level}
		const wish_form_rating = document.getElementById('wish_form_rating');
		if (rating) {wish_form_rating.value = rating}
		const wish_form_url = document.getElementById('wish_form_url');
		if (url) {wish_form_url.value = url}
		const wish_form_formatted_address = document.getElementById('wish_form_formatted_address');
		if (formatted_address) {wish_form_formatted_address.value = formatted_address}
		const wish_form_website = document.getElementById('wish_form_website');
		if (website) {wish_form_website.value = website}
		const wish_form_serves_breakfast = document.getElementById('wish_form_serves_breakfast');
		if (serves_breakfast) {wish_form_serves_breakfast.value = serves_breakfast}
		const wish_form_serves_brunch = document.getElementById('wish_form_serves_brunch');
		if (serves_brunch) {wish_form_serves_brunch.value = serves_brunch}
		const wish_form_serves_dinner = document.getElementById('wish_form_serves_dinner');
		if (serves_dinner) {wish_form_serves_dinner.value = serves_dinner}
		const wish_form_serves_vegetarian_food = document.getElementById('wish_form_serves_vegetarian_food');
		if (serves_vegetarian_food) {wish_form_serves_vegetarian_food.value = serves_vegetarian_food}
		const wish_form_serves_wine = document.getElementById('wish_form_serves_wine');
		if (serves_wine) {wish_form_serves_wine.value = serves_wine}

//----------------------------------------------------------------------- CREATING FAVORITES FORM ⤵

		let favslistForm = document.getElementById('favorites-add');
		let favslistSubmit = document.createElement('button')
		favslistSubmit.innerHTML = 'Add to Favorites';
		favslistSubmit.setAttribute('type', 'submit');
		favslistForm.appendChild(favslistSubmit)
		
    	const favs_form_place_id = document.getElementById('favs_form_place_id')
		if (favs_form_place_id) {favs_form_place_id.value = place_id}
    	const favs_form_name = document.getElementById('favs_form_name');
		if (favs_form_name) {favs_form_name.value = name}
		const favs_form_opening_hours = document.getElementById('favs_form_opening_hours');
		if (favs_form_opening_hours) {favs_form_opening_hours.value = opening_hours}
		const favs_form_photos = document.getElementById('favs_form_photos');
		if (favs_form_photos) {favs_form_photos.value = photos}
		const favs_form_price_level = document.getElementById('favs_form_price_level');
		if (favs_form_price_level) {favs_form_price_level.value = price_level}
		const favs_form_rating = document.getElementById('favs_form_rating');
		if (favs_form_rating) {favs_form_rating.value = rating}
		const favs_form_url = document.getElementById('favs_form_url');
		if (favs_form_url) {favs_form_url.value = url}
		const favs_form_formatted_address = document.getElementById('favs_form_formatted_address');
		if (favs_form_formatted_address) {favs_form_formatted_address.value = formatted_address}
		const favs_form_website = document.getElementById('favs_form_website');
		if (favs_form_website) {favs_form_website.value = website}
		const favs_form_serves_breakfast = document.getElementById('favs_form_serves_breakfast');
		if (serves_breakfast) {favs_form_serves_breakfast.value = serves_breakfast}
		const favs_form_serves_brunch = document.getElementById('favs_form_serves_brunch');
		if (serves_brunch) {favs_form_serves_brunch.value = serves_brunch}
		const favs_form_serves_dinner = document.getElementById('favs_form_serves_dinner');
		if (serves_dinner) {favs_form_serves_dinner.value = serves_dinner}
		const favs_form_serves_vegetarian_food = document.getElementById('favs_form_serves_vegetarian_food');
		if (serves_vegetarian_food) {favs_form_serves_vegetarian_food.value = serves_vegetarian_food}
		const favs_form_serves_wine = document.getElementById('favs_form_serves_wine');
		if (serves_wine) {favs_form_serves_wine.value = serves_wine}
	}
}
