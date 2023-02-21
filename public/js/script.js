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
				/* 'opening_hours', 'photos', 'price_level', 'rating', */ 'url',
				'adr_address',
				'website',
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
		console.log(wishlistSubmit)
		wishlistForm.appendChild(wishlistSubmit)
    	const wish_form_place_id = document.getElementById('wish_form_place_id')
		if (wish_form_place_id) {wish_form_place_id.value = place_id}
		console.log(wish_form_place_id.value);
    	const wish_form_name = document.getElementById('wish_form_name');
		if (wish_form_name) {wish_form_name.value = name}
		const wish_form_opening_hours = document.getElementById('wish_form_opening_hours');
		if (wish_form_opening_hours) {wish_form_opening_hours.value = opening_hours}
		const wish_form_photos = document.getElementById('wish_form_photos');
		if (wish_form_photos) {wish_form_photos.value = photos}
		const wish_form_price_level = document.getElementById('wish_form_price_level');
		if (wish_form_price_level) {wish_form_price_level.value = price_level}
		const wish_form_rating = document.getElementById('wish_form_rating');
		if (wish_form_rating) {wish_form_rating.value = rating}
		const wish_form_url = document.getElementById('wish_form_url');
		if (wish_form_url) {wish_form_url.value = url}
		const wish_form_adr_address = document.getElementById('wish_form_adr_address');
		if (wish_form_adr_address) {wish_form_adr_address.value = adr_address}
		const wish_form_website = document.getElementById('wish_form_website');
		if (wish_form_website) {wish_form_website.value = website}

//----------------------------------------------------------------------- CREATING FAVORITES FORM ⤵

		let favslistForm = document.getElementById('favorites-add');
		let favslistSubmit = document.createElement('button')
		favslistSubmit.innerHTML = 'Add to Favorites';
		favslistSubmit.setAttribute('type', 'submit');
		console.log(favslistSubmit)
		favslistForm.appendChild(favslistSubmit)
    	const favs_form_place_id = document.getElementById('favs_form_place_id')
		if (favs_form_place_id) {favs_form_place_id.value = place_id}
		console.log(favs_form_place_id.value);
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
		const favs_form_adr_address = document.getElementById('favs_form_adr_address');
		if (favs_form_adr_address) {favs_form_adr_address.value = adr_address}
		const favs_form_website = document.getElementById('favs_form_website');
		if (favs_form_website) {favs_form_website.value = website}
	}
}
