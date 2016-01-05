var app = angular.module('githubApp',[]);
app.controller('githubController',function($scope,$http){
  $scope.repos = [];
  $scope.profiles = [
    {"id":"avecchio","type":"user"},
    {"id":"vortexlaboratory","type":"org"},
    {"id":"binary-labs","type":"org"},
    {"id":"sprocket-games","type":"org"},
    {"id":"power-house","type":"org"}
  ];

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
          $scope.repos.push(project);
        });
      },
    });
  });
});
