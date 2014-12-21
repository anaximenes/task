//router.js

define([
	'jquery',
	'underscore',
	'backbone',
	// 'views'
	], 
	function($, _, Backbone) {
		var Router = Backbone.Router.extend({
			routes: {
				'!/books': 'showBooks',
				'*defaultAction': 'default'
			},
			default: function() {
				alert('def')
			},
			showBooks: function() {

			}
		})

		var router = new Router()

		Backbone.history.start({ pushState: false })

		return router
	}
)