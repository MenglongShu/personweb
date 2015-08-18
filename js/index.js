var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
     
    .when('/home',{
        templateUrl:'pages/home.html',
        controller:'homeCtrl'
    })
    
    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutCtrl'
    })
    
    .when('/education', {
        templateUrl: 'pages/education.html',
        controller: 'eduCtrl'
    })
    .when('/experiences', {
        templateUrl: 'pages/experiences.html',
        controller: 'expCtrl'
    })
    .when('/projects', {
        templateUrl: 'pages/projects.html',
        controller: 'proCtrl'
    })
});

myApp.controller('homeCtrl', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);
myApp.controller('aboutCtrl', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);
myApp.controller('eduCtrl', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);
myApp.controller('expCtrl', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);
myApp.controller('proCtrl', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);

myApp.controller('myCtrl', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.num = $routeParams.num || 1;
    
}]);
