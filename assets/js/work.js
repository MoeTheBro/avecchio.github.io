var app = angular.module('workApp',[], function($interpolateProvider){
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
app.controller('workAppController',function($scope,$http){
  $scope.jobs = ;
});
