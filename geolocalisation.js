document.addEventListener('DOMContentLoaded', () => {
    const locateBtn = document.getElementById('locate-btn');
    const mapContainer = document.getElementById('map-container');

    locateBtn.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    mapContainer.innerHTML = `<iframe 
                        width="100%" 
                        height="400" 
                        frameborder="0" 
                        style="border:0" 
                        src="https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${latitude},${longitude}&zoom=15" 
                        allowfullscreen>
                    </iframe>`;
                },
                (error) => {
                    mapContainer.innerHTML = `<p>Erreur : Impossible d'accéder à votre position.</p>`;
                }
            );
        } else {
            mapContainer.innerHTML = `<p>La géolocalisation n'est pas prise en charge par votre navigateur.</p>`;
        }
    });
});
