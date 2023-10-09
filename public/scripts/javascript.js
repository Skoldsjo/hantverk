


// Isotope - combination filters with selects START
// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.box'
});

// store filter for each group
var filters = {};

$('.filters').on( 'change', function( event ) {
  var $select = $( event.target );
  // get group key
  var filterGroup = $select.attr('value-group');
  // set filter for group
  filters[ filterGroup ] = event.target.value;
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});



// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}


// Isotope - combination filters with selects END 





// Something

const container = document.getElementById('container');

container.addEventListener('scroll', () => {
  if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        // Add new data to the container
        const list = document.querySelector('#container ul');
        data.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          list.appendChild(li);
        });
      });
  }
});


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
