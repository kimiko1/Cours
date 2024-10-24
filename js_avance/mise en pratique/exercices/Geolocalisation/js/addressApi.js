export function getAddressFromCoords({ latitude, longitude }) {
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${longitude}&lat=${latitude}`;
    
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Problème lors de la récupération de l'adresse.");
            }
            return response.json();
        })
        .then(data => {
            if (data.features && data.features.length > 0) {
                console.log(data);
                return data.features[0].properties.label;
            } else {
                throw new Error("Aucune adresse trouvée.");
            }
        });
}
