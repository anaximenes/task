//router.js

define([
	'jquery',
	'underscore',
	'backbone',
	'views/pageview'
	], 
	function($, _, Backbone, PageView) {
 		var currentView = undefined;
		var Router = Backbone.Router.extend({
			routes: {
				'!/books/': 'showBooks',
				'!/books': 'showBooks',
				'*defaultAction': 'default'
			},
			default: function() {
				if (currentView)
					currentView.remove()
				console.log("default")
			},
			showBooks: function() {
				// currentView = new PageView()
				currentView = new PageView({el: ".page"})
				// if (currentView)
				// 	currentView.remove()
				// currentView = new BookListView({el:'#book-list'})
				// console.log('render')
				// $('#book-list').html(currentView.render().el)
			}
		})

		var router = new Router()
		// Backbone.history.start()
		Backbone.history.start({ pushState: false })

		router.navigate('!/books/', true)

		currentView.on('change', function() {
			console.log('out')
			currentView.remove();
			currentView = new BookListView()
		})

		return router
	}
)
