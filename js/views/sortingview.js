//sortingview.js

define([
	'jquery',
	'underscore',
	'backbone',
	// 'views/sortingview'
	], function($, _, Backbone) {
		var SortingButtonView = Backbone.View.extend({
			
			render: function(sortingBy) {
				var html = _.template($('#sorting-button-template').html())
				var caption = ''
				if (sortingBy == 'author') {
					caption = 'сортировать по названию'
				} else {
					caption = 'сортировать по автору'
				}
				
				var text = html({caption: caption})

				this.$el.html(text)
				return this
			}
		})

		return SortingButtonView
	}
)