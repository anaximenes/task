//views.js

define([
	'jquery',
	'underscore',
	'backbone',
	'models',
	'collections'
	], function($, _, Backbone, BookModel, BookCollection){
		var BookView = Backbone.View.extend({
			// tagname: "button",

			render: function(){
				var text = _.template($('#book-entry-template').html())
				// console.log(this.model.toJSON())
				this.$el.html(text(this.model.toJSON()))
				return this
			},

			events: {
				'click .book-entry': 'toggleDescription'
				// "mouseover .book-entry" : "toggleDescription"
			},
			toggleDescription: function() {
				console.log('click!')
				this.$('.description').toggle()
			}
		})

		return BookView
	})