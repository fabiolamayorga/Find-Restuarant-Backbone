var app = app || {};

$(document).on('pageinit',function () {
	/*$(this.el).trigger( "pagecreate" );
	$.mobile.ajaxEnabled = false;*/
	new app.RestaurantSearch();
	
})