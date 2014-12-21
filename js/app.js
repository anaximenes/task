//app.js

define([
	'jquery',
	'underscore',
	'backbone',
	'models',
	'collections',
	'views'
	], 
	function($, _, Backbone, BookModel, BookCollection, BookView) {
		var books = [
			{author: 'author1', title: 'title1'},
			{author: 'author2', title: 'title2'},
			{author: 'author2', title: 'title3'},
			{author: 'author3', title: 'title4'}
		]

		var BookRender = function(book) {
			var view = new BookView({model: book})
			view.render()
		}

		var init = function() {
			var collection = new BookCollection(books)
			_.each(collection.models, function(item){
				BookRender(item)
			})
		}

		return {init: init}
	}
)