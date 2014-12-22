//views.js

define([
	'jquery',
	'underscore',
	'backbone',
	'models',
	'collections'
	], function($, _, Backbone, BookModel, BookCollection){
		var BookView = Backbone.View.extend({

			render: function(){
				var text = _.template($('#book-entry-template').html())
				this.$el.html(text(this.model.toJSON()))
				return this
			},

			events: {
				'click .book-entry': 'toggleDescription',
				"mouseover .book-entry" : "lightUp",
				"mouseout .book-entry" : "lightDown"
			},
			lightUp: function() {
				console.log('mouseover')

				this.$el.css('background-color', 'aliceblue')
			},
			lightDown: function() {
				console.log('mouseout')
				this.$el.css('background-color', '#FEFFFD')
			},
			toggleDescription: function() {
				console.log('click!')
				this.$('.description').toggle()
			}
		})

		return BookView
	})