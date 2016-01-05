var app = angular.module('workApp',[], function($interpolateProvider){
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
app.controller('workController',function($scope,$http){
  $scope.bins = [];
  $scope.skills = [];
  $scope.profiles = [
    {"id":"avecchio","type":"user"},
    {"id":"vortexlaboratory","type":"org"},
    {"id":"binary-labs","type":"org"},
    {"id":"sprocket-games","type":"org"},
    {"id":"power-house","type":"org"}
  ];

  $.ajax({
    url: "/assets/metadata/info.json",
    async: false,
    data: {format: 'json'},
    error: function(){},
    success: function(data){
      $scope.skills = data;
    },
  });

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
          var lang = (project.language == null) ? "Unknown" : project.language;
          var found = false;
          var current_date = (new Date()).getTime()/1000;
          var last_updated = Math.floor(new Date(project.pushed_at).getTime()/1000);
          if(last_updated > (current_date - (2678400*2))){project.activity = {"badge":"success","msg":""};}
          else if((last_updated < (current_date - (2678400*2))) || (last_updated > (current_date - (2678400*6)))){project.activity = {"badge":"warning","msg":""};}
          else{project.activity = {"badge":"danger","msg":""};}
          angular.forEach($scope.bins, function(bin){
            if(bin.language == lang){
              bin.repos.push(project);
              bin.size += 1;
              found = true;
            }
          });
          if(!found){
            $scope.bins.push({"language":lang,"size":1,"repos":[project]});
          }
        });
      },
    });
  });
  console.log($scope.bins);
});
