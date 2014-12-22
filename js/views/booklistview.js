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

			bookRender: function(book) {
				var view = new BookView({model: book})
				this.$el.append(view.render().el)
			},

			render: function(sortingBy) {
				var collection = new BookCollection()
				var that = this

				collection.fetch({
					success: function (response) {
						var models = response.models
						if (sortingBy && sortingBy != 'none') {
							models = _.sortBy(response.models, function(it) {
								console.log(sortingBy)
								return it.get(sortingBy).toLowerCase()
							})
						}
						for (var item in models) {
							this.bookRender(models[item])
						}
					}.bind(this),
					error: function (err) {
						console.error(err)
					}
				})
				return this
			},
		})

		return BookListView
	})