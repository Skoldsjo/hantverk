
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
  
  // Örebro - Karlskoga
  fetchAndPopulateBusinesses('/B-index/Orebro/Karlskoga/mlskog.html', 'container00001');

  fetchAndPopulateBusinesses('/B-index/Orebro/Karlskoga/hermansson.html', 'container00002');

  fetchAndPopulateBusinesses('/B-index/Orebro/Karlskoga/karlskogaelochfastigheter.html', 'container00003');

  fetchAndPopulateBusinesses('/B-index/Orebro/Karlskoga/karlskogamaleriservice.html', 'container00005');

  fetchAndPopulateBusinesses('/B-index/Orebro/Karlskoga/TonyThomassonsBygg.html', 'container00006');

  // Örebro - Degerfors

  fetchAndPopulateBusinesses('/B-index/Orebro/Degerfors/lindasstad.html', 'container00004');