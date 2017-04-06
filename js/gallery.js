var $grid = $('.grid').imagesLoaded(function () {
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item'
    });
});