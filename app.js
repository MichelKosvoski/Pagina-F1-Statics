const urlParams = new URLSearchParams(window.location.search);
const trackName = urlParams.get('name');

const trackNameElement = document.getElementById('track-name');
const trackDetailsElement = document.getElementById('track-details');

// Buscar as informações da pista no array de pistas (ou em um arquivo JSON)
const track = tracks.find(t => t.name === trackName);

trackNameElement.textContent = track.name;
trackDetailsElement.textContent = track.details;