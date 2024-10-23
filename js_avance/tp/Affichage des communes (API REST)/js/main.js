document.addEventListener('DOMContentLoaded', () => {
    const regionsSelect = document.getElementById('regions');
    const departementsSelect = document.getElementById('departements');
    const communesDiv = document.getElementById('communes');
    const geoInfoDiv = document.getElementById('geo-info');
    const map = L.map('map').setView([46.6034, 1.8883], 5); // Vue par défaut sur la France

    // Charger la carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Récupérer les régions
    getRegions()
        .then(data => {
            data.forEach(region => {
                const option = document.createElement('option');
                option.value = region.code;
                option.textContent = region.nom;
                regionsSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching regions:', error));

    // Écouter le changement de région
    regionsSelect.addEventListener('change', () => {
        const regionCode = regionsSelect.value;
        departementsSelect.innerHTML = ''; // Réinitialise le menu des départements

        getDepartements(regionCode)
            .then(data => {
                data.forEach(departement => {
                    const option = document.createElement('option');
                    option.value = departement.code;
                    option.textContent = departement.nom;
                    departementsSelect.appendChild(option);
                });

                // Sélectionner le premier département si des départements sont chargés
                if (data.length > 0) {
                    departementsSelect.selectedIndex = 0;
                }
            })
            .catch(error => console.error('Error fetching departments:', error));
    });

    // Afficher les communes
    document.getElementById('show-communes').addEventListener('click', () => {
        const departementCode = departementsSelect.value;
        communesDiv.innerHTML = '';

        getCommunes(departementCode)
            .then(data => {
                data.sort((a, b) => b.population - a.population);
                data.forEach(commune => {
                    const communeDiv = document.createElement('div');
                    communeDiv.textContent = `${commune.nom} - Population: ${commune.population}`;
                    communesDiv.appendChild(communeDiv);
                    console.log(commune);
                });
            })
            .catch(error => console.error('Error fetching communes:', error));
    });

    // Géo-localisation
    document.getElementById('geo-btn').addEventListener('click', () => {
        handleGeoLocation(map, geoInfoDiv);
    });
});
