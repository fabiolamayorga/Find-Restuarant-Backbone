var app = app || {};

app.RestaurantSearch = Backbone.View.extend({
	el: '#searchRestaurants',
	template: _.template( $('#resturantItem').html() ),

	events: {
		'keydown #search' : 'search',
		'click #myList li a' : 'showDetails'
	},

	initialize : function(){
		this.collection = new app.RestaurantList();
		this.listenTo(this.collection, 'reset', this.render);
	},

	render: function(){
		this.$("#myList li").empty();
		this.$("#listview").html(this.template({Restaurant : this.collection.models}));
		$('#myList').listview().listview('refresh');
		return this;

	},

	search : function(e){
		var inputText = $(e.target).val();
		if (inputText === ''){
			this.$("#myList li").empty();
		}else{
			this.showLoader();
			this.collection.fetch({ 
				reset : true,
				data: {name: inputText},
				success : function(){
					$.mobile.loading( 'hide');
				}
			});
		}
	},

	showLoader: function(){
		$.mobile.loading( 'show', {
		  text: 'Loading',
		  textVisible: true,
		  theme: 'b',
		  textonly: false
		 });
	},

	showDetails : function(e){
		var selectedModel = $(e.target).text(),
			self = this;
		this.collection.each(function(item){		
			var restaurant = new app.RestaurantDetails({
				model : item
			});
			if (restaurant.model.get('name') === selectedModel){
				//this.$("#details").html(restaurant.render().el);
				restaurant.render().el;
				this.$("#popupBasic").popup();
			};
		});
	},


	

})