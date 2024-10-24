import { getCoords } from './geolocation.js';
import { getAddressFromCoords } from './addressApi.js';
import { waitFor } from './utils.js';

const geolocationBtn = document.getElementById('geolocation-btn');
const addressText = document.getElementById('address-text');
const errorText = document.getElementById('error-text');

geolocationBtn.addEventListener('click', () => {
    getCoords()
        .then(coords => getAddressFromCoords(coords))
        .then(address => {
            addressText.textContent = address;
            errorText.setAttribute('hidden', true);
        })
        .catch(error => {
            errorText.removeAttribute('hidden');
            errorText.textContent = error.message;
            waitFor(5).then(() => {
                errorText.setAttribute('hidden', true);
            });
        });
});
