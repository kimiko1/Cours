const handleGeoLocation = (map, geoInfoDiv) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude: lat, longitude: lon } = position.coords;

            getGeoInfo(lat, lon)
                .then(data => {
                    const communeInfo = data[0];
                    geoInfoDiv.innerHTML = `
                        <h2>Vous êtes à ${communeInfo.nom}</h2>
                        <p>Population: ${communeInfo.population}</p>
                        <p>Surface: ${communeInfo.surface} km²</p>
                    `;

                    return getContour(lat, lon);
                })
                .then(data => {
                    const contour = L.geoJSON(data[0].contour).addTo(map);
                    map.fitBounds(contour.getBounds());
                    map.setView([lat, lon], 13);
                })
                .catch(error => console.error('Error fetching geo information:', error));
        });
    } else {
        alert('Géolocalisation non supportée par ce navigateur.');
    }
};
