var signature = angular.module('signatureApp',[], function($interpolateProvider){
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
signature.controller('signatureController',function($scope,$http){
  $scope.signatures = [];
  $scope.signature = null;
  $.ajax({
    url: "",
    async: false,
    data: {format: 'json'},
    error: function(){},
    success: function(data){
      $scope.signatures = data;
    },
  });
  console.log($scope.signatures);
});
