var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  
