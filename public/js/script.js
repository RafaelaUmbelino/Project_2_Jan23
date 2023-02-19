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
      fields: ['place_id', 'geometry', 'name']
    });

    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
  let place = autocomplete.getPlace();
  console.log(place);

  if (!place.geometry) {
    document.getElementById('autocomplete').placeholder = "Search for a place"
  } else {document.getElementById('details').innerHTML = place.name}
}