(function(){

	var app = angular.module("portfolio", []);

	/*app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	    $httpProvider.defaults.cache = false;
	    if (!$httpProvider.defaults.headers.get) {
	      $httpProvider.defaults.headers.get = {};
	    }
	    // disable IE ajax request caching
	    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
	    //.....here proceed with your routes
	}]);*/

	app.controller('ToolsController',function($scope, $http){
		$http.get('js/ferramentas.json').then(function(res){
		    $scope.ferramentaitens = res.data;
		});
	});

	app.controller('WorksController',function($scope, $http){
		$http.get('js/trabalhos.json').then(function(res){
		    $scope.trabalhoitens = res.data;
		});
	});
})();