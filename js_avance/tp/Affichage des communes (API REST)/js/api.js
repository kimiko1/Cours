const fetchData  = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

const getRegions = () => fetchData('https://geo.api.gouv.fr/regions');
const getDepartements = (regionCode) => fetchData(`https://geo.api.gouv.fr/regions/${regionCode}/departements`);
const getCommunes = (departementCode) => fetchData(`https://geo.api.gouv.fr/departements/${departementCode}/communes`);
const getGeoInfo = (lat, lon) => fetchData(`https://geo.api.gouv.fr/communes?lat=${lat}&lon=${lon}&fields=nom,population,surface`);
const getContour = (lat, lon) => fetchData(`https://geo.api.gouv.fr/communes?lat=${lat}&lon=${lon}&fields=contour`);
