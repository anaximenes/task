//pageview.js

define([
	'jquery',
	'underscore',
	'backbone',
	'models',
	'views/booklistview',
	'views/sortingview'
	], function($, _, Backbone, BookModel, BookListView, SortingButtonView) {
		var PageView = Backbone.View.extend({
			sortingBy: 'author',
			BookList: undefined,

			events: {
				'click #sort-button': 'sort'
			},

			sort: function() {
				console.log('page catched click')
				if (this.sortingBy == 'author') {
					this.sortingBy = 'title'
				} else {
					this.sortingBy = 'author'
				}
				console.log(this.sortingBy)
				this.render()
			},

			render: function() {
				console.log('render!')
				if (this.BookList){
					this.BookList.remove()
				}
				this.BookList = new BookListView() //{el: '#book-list'}
				this.$('#book-list').html(this.BookList.render(this.sortingBy).el)

				var sortingView = new SortingButtonView()
				this.$('#sorting').html(sortingView.render(this.sortingBy).el)
				console.log('render done!')

				return this
			},

			initialize: function() {
				this.render()
			}
		})

		return PageView
	}
)
