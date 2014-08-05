require.config({
    paths: {
        jquery: 'http://code.jquery.com/jquery-2.0.3.min',
        jqm: 'http://code.jquery.com/mobile/1.4.0/jquery.mobile-1.4.0.min',
        underscore: 'http://cdn.jsdelivr.net/underscorejs/1.5.2/underscore-min',
        backbone: 'http://cdn.jsdelivr.net/backbonejs/1.1.0/backbone-min'
    },
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

define(['jquery', 'jqm'], function ($, jqm) {

    // wait for page initialization
    $(document).on('pageinit', '#example', function () {
        var page = $(this);
        // load all dependencies including Views, Models and Collections
        require(['view/RestaurantSearch'], function (RestaurantSearch) {
            // initialize Backbone components
            // for this example it is a single view using the initialized jQuery Mobile page as element
            new app.RestaurantSearch();
        });
    });
});