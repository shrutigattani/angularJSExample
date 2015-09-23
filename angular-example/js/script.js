	// create the module and name it scotchApp
	var shrutiApp = angular.module('shrutiApp', ['ngRoute']);
    var flickrURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=fee758b6f758b4493bbee6a3dd1eb089&sort=relevance&extras=url_m&format=json&nojsoncallback=1&orientation=square";
   // configure our routes
	shrutiApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
			
			// route for the jobs page
			.when('/jobs', {
				templateUrl : 'pages/jobs.html',
				controller  : 'jobsController'
			});
	});

	// create the controller and inject Angular's $scope
	shrutiApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		
	});

	shrutiApp.controller('aboutController', function($scope, $http) {
		$scope.message = 'Search your photos here.';
		$scope.photoType ='tree';
		 
	     $scope.loadPhoto  = function() {flickrURL = flickrURL + '&text=' + $scope.photoType;
		 $http.get(flickrURL).success(function (response){
		 $scope.flickrPhotos = response.photos.photo;
		 //$scope.height_t = response.photos.height_t;
		 //$scope.width_t = response.photos.height_t;
		});};
		$scope.loadColorPhoto() = function(){flickrURL = flickrURL + '&color=' + $scope.data-color-code;
		 $http.get(flickrURL).success(function (response){
		 $scope.flickrPhotos = response.photos.photo;
		 //$scope.height_t = response.photos.height_t;
		 //$scope.width_t = response.photos.height_t;
		});};
			
		

});

	shrutiApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
		
	shrutiApp.controller('jobsController', function($scope, $http){
			$scope.message = 'You can see latest jobs.';
			$http.get("http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=java").success(function(response){
			$scope.jobs = response.resultItemList;
	});
});