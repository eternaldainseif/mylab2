// Code goes here

(function() {
  angular
    .module("countryCities", [])
    .controller("MainController", MainController);



  function MainController($scope) {

    $scope.message = "List of Countries";

    $scope.countries = [{
        country: 'South Korea',
        city: 'Seoul'
      }, {
        country: 'Taiwan',
        city: 'Taipei'
      }, {
        country: 'China',
        city: 'Beijing'
      }, {
        country: 'Thailand',
        city: 'Bangkok'
      }, {
        country: 'Australia',
        city: 'Sydney'
      }

    ]


  }



})();