var $grid = $('.grid').imagesLoaded(function () {
    $grid.masonry({
        // options
        columnWidth: 200,
        itemSelector: '.grid-item'
    });
});