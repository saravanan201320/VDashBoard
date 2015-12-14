var myApp = angular.module('myApp',
    ['ngRoute','googlechart','angular.filter','mainPageControllers','SelectedASGPageControllers']);

// configure our routes
myApp.config(function($routeProvider) {
  $routeProvider
      .when('/index', {
        templateUrl : 'views/MainPage.html',
        controller  : 'mainPageController'
      })

       .when('/SelectedASGPage', {
        templateUrl : 'views/SelectedASGPage.html',
        controller  : 'SelectedASGPageController'
      })

      .when('/', {
        templateUrl : 'views/MainPage.html',
        controller  : 'mainPageController'
      })

  .otherwise({
        redirectTo: '/',
        templateUrl: 'views/MainPage.html',
        controller  : 'mainPageController'
      });
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope,$rootScope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
    // $rootScope.loggedIn = false;
});

//creativeApp.controller('userController', function($scope,$rootScope) {
//    // create a message to display in our view
//    $scope.userClick = function(){
//        $rootScope.fName = $scope.firstname;
//        $rootScope.lName = $scope.lastname;
//        $rootScope.pwd = $scope.password;
//    }
//});

// creativeApp.controller('NavbarController', function($scope,$rootScope) {
//   $scope.message = 'Look! I am an about page.';
//     $scope.isCollapsed = false;
// });

// creativeApp.controller('contactController', function($scope) {
//   $scope.message = 'Contact us! JK. This is just a demo.';
// });

// creativeApp.controller('signupController', function($scope) {
//   $scope.message = 'SIGNUP PAGE';
// });