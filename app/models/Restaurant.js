var app = app || {};

app.Restaurant = Backbone.Model.extend({
	
	defaults: {
		address: "",
		area: "",
		city: "",
		country: "",
		id: 0,
		mobile_reserve_url: "",
		name: "",
		phone: "",
		postal_code: "",
		reserve_url: "",
		state: ""
	}
})