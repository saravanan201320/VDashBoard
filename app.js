var myApp = angular.module('myApp',
    ['ngRoute','googlechart','angular.filter','ngSanitize','mainPageControllers','SelectedASGPageControllers','SelectedApplicationPageControllers']);

// configure our routes
myApp.config(function($routeProvider) {
  $routeProvider
      .when('/index', {
        templateUrl : 'MainPage.html',
        controller  : 'mainController'
      })
       .when('/SelectedASGPage', {
        templateUrl : 'SelectedASGPage.html',
        controller  : 'SelectedASGPageController'
      })
       .when('/SelectedApplicationPage', {
        templateUrl : 'SelectedApplicationPage.html',
        controller  : 'SelectedApplicationPageController'
      })
  .otherwise({
        redirectTo: '/',
        templateUrl: 'MainPage.html',
        controller  : 'mainController'
      });
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope,$rootScope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
    // $rootScope.loggedIn = false;
});