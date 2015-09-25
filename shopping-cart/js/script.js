	// create the module and name it scotchApp
	var shoppingApp = angular.module('shoppingApp', ['ngRoute']);
    
   // configure our routes
	shoppingApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			});

/*			// route for the about page
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
			}); */
	});

	// create the controller and inject Angular's $scope
	shoppingApp.controller("mainController",['$scope','$http', function($scope, $http) 
	{
		// create a message to display in our view
		//$scope.message = 'Please visit about photo page for photo search!';
        $http.get('json/categories.json').success(function(data) {
        $scope.categories = data;
    
    });		
	}]
	);

/*	shoppingApp.controller('aboutController', function($scope, $http) {
		$scope.message = 'Search your photos here.';
		$scope.photoType ='';
		
		
       
        $scope.colors = ['Red', 'Orange','#a24615','#ff9f9c','#fffa00','#0062c6','#90e200'];
		 if ($scope.photoType ===''){
		 	$scope.photoType ='Tree';
		 	setTimeout(function() {
		 		$scope.loadPhoto();},3000);
		 }
	     $scope.loadPhoto  = function() {flickrURL = flickrURL + '&text=' + $scope.photoType;
		 $http.get(flickrURL).success(function (response){
		 $scope.flickrPhotos = response.photos.photo;
		 	
		});};
		
		$scope.loadColorPhoto = function(){ 
			alert("clicked");
		};
			//flickrURL = flickrURL + '&color_codes=0';
		
		//$http.get(flickrURL).success(function (response){
		 //$scope.flickrPhotos = response.photos.photo;
		 	
		//});
		
		

});

	shoppingApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us!';
	});
		
	shoppingApp.controller('jobsController', function($scope, $http){
			$scope.message = 'You can see latest jobs here.';
			$http.get("http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=java").success(function(response){
			$scope.jobs = response.resultItemList;
	});
});  */