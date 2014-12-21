//views.js

define([
	'jquery',
	'underscore',
	'backbone',
	'models'
	], function($, _, Backbone, BookModel){
		var BookCollection = Backbone.Collection.extend({
			model: BookModel
		})

		return BookCollection
	}
)