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
				'rating',
				'price_level',
				'url',
				'formatted_address',
				'website',
			],
		},
	);

	autocomplete.addListener('place_changed', onPlaceChanged);
}

//----------------------------------------------------------------------- GETTING OBJECT FROM USER SELECTING ESTABLISHMENT ⤵

function onPlaceChanged() {
	let place = autocomplete.getPlace();
	console.log(place);
	let {
		place_id,
		name,
		photos,
		price_level,
		rating,
		url,
		formatted_address,
		website,
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
		if (rating) document.getElementById('res-rating').innerHTML = `Google rating: ${rating} / 5`;
		if (price_level) document.getElementById('res-price-level').innerHTML = `Price level: ${price_level} / 5`;
		if (website) {
			document
				.getElementById('res-website')
				.setAttribute('href', website);
			document.getElementById('res-website').innerHTML = 'Website';
		}
    

//----------------------------------------------------------------------- CREATING WISHLIST FORM ⤵

		const wishlistForm = document.getElementById('wishlist-add');
		if (!(document.getElementById('wish-submit'))) {
			const  wishlistSubmit = document.createElement('button')
		wishlistSubmit.innerHTML = 'Add to Wishlist';
		wishlistSubmit.setAttribute('type', 'submit');
		wishlistSubmit.setAttribute('id', 'wish-submit')
		wishlistForm.appendChild(wishlistSubmit)
		}
		
		

    	const wish_form_place_id = document.getElementById('wish_form_place_id')
		if (place_id) {wish_form_place_id.value = place_id}
    	const wish_form_name = document.getElementById('wish_form_name');
		if (name) {wish_form_name.value = name}
		const wish_form_photos = document.getElementById('wish_form_photos');
		if (photoUrl) {wish_form_photos.value = photoUrl}
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

//----------------------------------------------------------------------- CREATING FAVORITES FORM ⤵

		const favslistForm = document.getElementById('favorites-add');
		if (!(document.getElementById('favs-submit'))) {
			const favslistSubmit = document.createElement('button')
			favslistSubmit.innerHTML = 'Add to Favorites';
			favslistSubmit.setAttribute('type', 'submit');
			favslistSubmit.setAttribute('id', 'favs-submit')
			favslistForm.appendChild(favslistSubmit)
		}
		
		
    	const favs_form_place_id = document.getElementById('favs_form_place_id')
		if (place_id) {favs_form_place_id.value = place_id}
    	const favs_form_name = document.getElementById('favs_form_name');
		if (name) {favs_form_name.value = name}
		const favs_form_photos = document.getElementById('favs_form_photos');
		if (photoUrl) {favs_form_photos.value = photoUrl}
		const favs_form_price_level = document.getElementById('favs_form_price_level');
		if (price_level) {favs_form_price_level.value = price_level}
		const favs_form_rating = document.getElementById('favs_form_rating');
		if (rating) {favs_form_rating.value = rating}
		const favs_form_url = document.getElementById('favs_form_url');
		if (url) {favs_form_url.value = url}
		const favs_form_formatted_address = document.getElementById('favs_form_formatted_address');
		if (formatted_address) {favs_form_formatted_address.value = formatted_address}
		const favs_form_website = document.getElementById('favs_form_website');
		if (website) {favs_form_website.value = website}
	}
}
