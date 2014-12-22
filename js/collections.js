//views.js

define([
	'jquery',
	'underscore',
	'backbone',
	'models'
	], function($, _, Backbone, BookModel){
		var BookCollection = Backbone.Collection.extend({
			url: 'api/books.json',
			parse: function (res) {
				return res;
			}
		})

		return BookCollection
	}
)