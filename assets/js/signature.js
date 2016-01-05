var app = angular.module('githubApp',[], function($interpolateProvider){
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
app.controller('githubController',function($scope,$http){
  $scope.bins = [];

  angular.forEach($scope.profiles, function(profile){
    $.ajax({
      url: "",
      async: false,
      data: {format: 'json'},
      error: function(){},
      success: function(data){
      },
    });
  });
});
