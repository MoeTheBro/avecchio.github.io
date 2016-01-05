var app = angular.module('githubApp',[], function($interpolateProvider){
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
app.controller('githubController',function($scope,$http){
  $scope.bins = [];
  $scope.profiles = [
    {"id":"avecchio","type":"user"},
    {"id":"vortexlaboratory","type":"org"},
    {"id":"binary-labs","type":"org"},
    {"id":"sprocket-games","type":"org"},
    {"id":"power-house","type":"org"}
  ];

  $scope.activity = function(time){

  }

  angular.forEach($scope.profiles, function(profile){
    var url = (profile.type=="user") ? "users/" : "orgs/";
    url = "https://api.github.com/" + url + profile.id + "/repos"
    $.ajax({
      url: url,
      async: false,
      data: {format: 'json'},
      error: function(){},
      success: function(data){
        angular.forEach(data, function(project){
          var found = false;
          angular.forEach($scope.bins, function(bin){
            if(bin.language == project.language){
              bin.repos.push(project);
              found = true;
            }
          });
          if(!found){
            $scope.bins.push({"language":project.language,"repos":[project]});
          }
        });
      },
    });
  });
  console.log($scope.bins);
});
