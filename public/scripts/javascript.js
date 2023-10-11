// Hide .grid until ui-group is chosen
// Select the .ui-group elements
const uiGroups = document.querySelectorAll('.ui-group select');

// Select the .grid element
const grid = document.querySelector('.grid');

// Add a change event listener to all .ui-group select elements
uiGroups.forEach(select => {
  select.addEventListener('change', () => {
    // Check if any option is selected in any .ui-group
    const anyOptionSelected = Array.from(uiGroups).some(select => select.value !== '');

    // Show or hide the .grid based on whether any option is selected
    grid.style.display = anyOptionSelected ? 'block' : 'none';
  });
});



// End


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






