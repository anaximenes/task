//model.js

define([
	'jquery',
	'underscore',
	'backbone'
	], function($, _, Backbone){
	var BookModel = Backbone.Model.extend({
		defaults: {
			title: 'Unknown title',
			author: 'Unknown author',
			description: 'No description'
		}
	})
	return BookModel
})