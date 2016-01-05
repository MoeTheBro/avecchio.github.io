var app = angular.module('githubApp',[], function($interpolateProvider){
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
app.controller('githubController',function($scope,$http){
  $scope.bins = [];

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
          var lang = (project.language == null) ? "Unknown" : project.language;
          var found = false;
          var last_updated = Math.floor(new Date(project.pushed_at).getTime()/1000);
          if(last_updated){project.activity = {"badge":"","msg":""};}
          else if((last_updated)||(last_updated)){project.activity = {"badge":"","msg":""};}
          else{project.activity = {"badge":"","msg":""};}
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
});
