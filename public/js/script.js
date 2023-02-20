// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("Project_2_jan23 JS imported successfully!");
});

let autocomplete;
function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'), {
      types: ['establishment'],
      componentRestrictions: {'country': ['PT']},
      fields: ['place_id', 'name', 'business_status', /* 'opening_hours', 'photos', */ 'price_level', 'rating', 'url', 'adr_address', 'website']
    });

    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
  let place = autocomplete.getPlace();

  if (!place.place_id) {
    document.getElementById('autocomplete').placeholder = "Search for a place"
  } else {
    document.getElementById('res-name').innerHTML = place.name;
    document.getElementById('res-address').innerHTML = place.adr_address;
    document.getElementById('res-maps-url').setAttribute('href', place.url);
    document.getElementById('res-maps-url').innerHTML = 'Google Maps site';
    if (place.website) {
      document.getElementById('res-website').setAttribute('href', place.website);
      document.getElementById('res-website').innerHTML = 'Website';
    }
    document.getElementById('res-rating').innerHTML = place.rating;
    document.getElementById('res-price-level').innerHTML = place.price_level;
    document.getElementById('res-status').innerHTML = place.business_status;
    document.getElementById('wishlist-add').innerHTML = `<button type="submit">Add to Wishlist</button>`;
    document.getElementById('favorites-add').innerHTML = `<button type="submit">Add to Favorites</button>`;
/*     document.getElementById('res-photo').innerHTML = place.photos[0].photo_reference;
    document.getElementById('res-photo').setAttribute('href', place.url.photos[0].getUrl());
    document.getElementById('res-photo').innerHTML = 'photo';
    console.log(place.opening_hours) */
  }
}