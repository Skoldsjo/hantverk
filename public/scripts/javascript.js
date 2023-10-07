
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


// EMAIL



