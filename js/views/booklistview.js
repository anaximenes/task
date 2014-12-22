//booklistview.js

define([
	'jquery',
	'underscore',
	'backbone',
	'models',
	'collections',
	'views/bookview'
	], function($, _, Backbone, BookModel, BookCollection, BookView) {

		var BookListView = Backbone.View.extend({
			// el: '#book-list',
			// sortingBy: 'author',

			bookRender: function(book) {
				// console.log(book)
				var view = new BookView({model: book})
				this.$el.append(view.render().el)
			},

			render: function(sortingBy) {
				var collection = new BookCollection()
				var that = this

				collection.fetch({
					success: function (response) {
						var models = _.sortBy(response.models, function(it) {
							console.log(sortingBy)
							return it.get(sortingBy).toLowerCase()
							// return it.get(this.sortingBy)
						})
						for (var item in models) {
							this.bookRender(models[item])
						}
					}.bind(this),
					error: function (err) {
						console.error(err)
					}
				})
				console.log('  return smth')
				return this
			},
		})

		return BookListView
	})