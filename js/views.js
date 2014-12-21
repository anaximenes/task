//views.js

define([
	'jquery',
	'underscore',
	'backbone',
	'models',
	'collections'
	], function($, _, Backbone, BookModel, BookCollection){
		var BookView = Backbone.View.extend({
			el: '#book-list',

			render: function(){
				var text = _.template($('#book-entry-template').html())
				console.log(this.model.toJSON())
				// console.log(this.$el)
				this.$el.append(text(this.model.toJSON()))
			}
		})

		return BookView
	})