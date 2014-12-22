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
				currentView = new PageView({el: ".page"})
			}
		})

		var router = new Router()
		Backbone.history.start({ pushState: false })

		router.navigate('!/books/', true)

		return router
	}
)
