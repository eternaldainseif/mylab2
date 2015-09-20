var mainApp = angular.module("mainApp", ['ngRoute']);
 
mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'StudentController'
        })
        .when('/viewStudents', {
            templateUrl: 'viewStudents.html',
            controller: 'StudentController'
        })
        .when('/viewStudentsNameGender', {
          templateUrl: 'viewStudentsNameGender.html',
          controller: 'StudentController'
        })
        .when('/viewStudentsNameAge', {
          templateUrl: 'viewStudentsNameAge.html',
          controller: 'StudentController'
        })
        .when('/viewContentsUserInputs', {
          templateUrl: 'viewContentsUserInputs.html',
          controller: 'StudentController'
        })
        .when('/logoWithMessage', {
          templateUrl: 'logoWithMessage.html',
          controller: 'StudentController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

mainApp.controller('StudentController', function($scope) {
  $scope.students = [
    {name:'Tan Lee', age:'16', gender:'M'},
    {name:'Tan Kow', age:'21', gender:'M'},
    {name:'SiaoKau', age:'19', gender:'M'},
    {name:'Mary Tan', age:'25', gender:'F'},
    {name:'Susie Hong', age:'29', gender:'F'},
    {name:'May Seow', age:'24', gender:'F'}
    
    ];
  $scope.message = "Click on the hyper link to view the students list.";
  
});
