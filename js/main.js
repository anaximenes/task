
require.config( {
  paths: {
    jquery: 'libs/jquery.min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',
    bootstrap: 'libs/bootstrap.min'
  }
  // use: {
  // 	backbone: {
  // 		deps: ['underscore'. 'jquery', 'bootstrap']
  // 		attach: "Backbone"
  // 	}
  // }
} )
require(['app'], function(router){
	$("#container").html("QWEQWEQWE")
	//alert('wtf?');
	router.navigate('!/books', true)
	console.log("ready")

})
