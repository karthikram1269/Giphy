document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search').value;
    fetchGIFs(query);
});

function fetchGIFs(query) {
    const apiKey = 'YEBc6vCsKhbS4Wef3ZebpsgGo90V7GSI';  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=12`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayGIFs(data.data);
        })
        .catch(error => {
            console.error('Error fetching GIFs:', error);
        });
}

function displayGIFs(gifs) {
    const container = document.getElementById('gif-container');
    container.innerHTML = '';
    if (gifs.length === 0) {
        container.innerHTML = '<p>No GIFs found.</p>';
        return;
    }
    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        container.appendChild(img);
    });
}