var thoughtbot = angular.module('thoughtbotApp',[], function($interpolateProvider){
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
thoughtbot.controller('thoughtbotController',function($scope,$http){
  $scope.thoughts = [];
  $.ajax({
    url: '/assets/metadata/shorts.json',
    async: false,
    data: {format: 'json'},
    error: function(){},
    success: function(data){
      $scope.thoughts = data;
    },
  });
});
