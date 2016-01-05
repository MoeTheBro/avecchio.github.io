var stories = angular.module('storiesApp',[], function($interpolateProvider){
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
stories.controller('storiesController',function($scope,$http){
  $scope.tales = [];
  $scope.whispers = [];
  $.ajax({
    url: '/assets/metadata/whispers.json',
    async: false,
    data: {format: 'json'},
    error: function(){},
    success: function(data){
      $scope.whispers = data;
    },
  });
  console.log($scope.whispers);
});
