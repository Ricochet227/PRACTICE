function initMap() {
    var location = { lat: 40.7128, lng: -74.0060 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: location
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  
    const searchQuery = document.getElementById('searchQuery').value;
    const zipCode = document.getElementById('zipCode').value;
    const radius = document.getElementById('radius').value;
  
    // Redirect to search results page with query parameters
    window.location.href = `search-results.html?searchQuery=${searchQuery}&zipCode=${zipCode}&radius=${radius}`;
  }
  function getSearchResults() {
    const searchQuery = new URLSearchParams(window.location.search).get('searchQuery');
    const zipCode = new URLSearchParams(window.location.search).get('zipCode');
    const radius = new URLSearchParams(window.location.search).get('radius');
  
    // Use the zip code and radius values in the API request
    const apiUrl = `https://api.example.com/search?query=${searchQuery}&zipCode=${zipCode}&radius=${radius}`;
  
    // Fetch the search results from the API and display them
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Process and display the search results
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }