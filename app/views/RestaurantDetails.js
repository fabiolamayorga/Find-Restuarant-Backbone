var app = app || {};

app.RestaurantDetails = Backbone.View.extend({
	el: '#popupBasic',
	tagname : 'li',
	template: _.template( $('#restaurantDetails').html() ),

	render : function(){
		this.$el.html( this.template( this.model.toJSON() ));
		console.log(this.model);
		return this;	
	},



})