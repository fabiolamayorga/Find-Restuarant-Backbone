var app = app || {};

app.RestaurantList = Backbone.Collection.extend({
	model: app.Restaurant,
	url: "http://opentable.herokuapp.com/api/restaurants",

	sync: function(method, model, options){  
	    options.dataType = "jsonp";  
	    return Backbone.sync(method, model, options);  
	},

	parse: function(response){
		return response.restaurants
	}

})