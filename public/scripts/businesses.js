
// Fetch Businesses


function fetchAndPopulateBusinesses(url, containerId) {
    const xhr = new XMLHttpRequest();
    const businesses = document.getElementById(containerId);
  
    xhr.onload = function() {
      if (this.status === 200) {
        businesses.innerHTML = xhr.responseText;
      } else {
        console.warn(`Container ${containerId} - Did not work`);
      }
    };
  
    xhr.open('get', url);
    xhr.send();
  }
  
  // Usage:
  fetchAndPopulateBusinesses('/B-index/mlskog.html', 'containerOne');
  fetchAndPopulateBusinesses('/B-index/basket.html', 'containerTwo');
  fetchAndPopulateBusinesses('/B-index/skaneAB.html', 'containerThree');
  fetchAndPopulateBusinesses('/B-index/test.html', 'containerFour');
  fetchAndPopulateBusinesses('/B-index/basket.html', 'containerFive');