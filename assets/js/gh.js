window.Github = function(){
  Github.repositories = {
    {id="avecchio",type="user"},
    {id="vortexlaboratory",type="org"},
    {id="binary-labs",type="org"},
    {id="sprocket-games",type="org"},
    {id="power-house",type="org"},
  };

  Github.prototype.function = projects(){

  };

  Github.prototype.function = index(){
    var projects = [];
    for(var i=0; i<repositories.length; i++){
      var repo;
      repo.name = repositories[i].id;
      repo.type = repositories[i].type;
      $.ajax({
        url: github_url(repo.name,repo.type),
        data: {format: 'json'}
        error: function(){
          console.log('Error has occured retrieving repository: '+repo.name);
        }
        success: function(data){
          repo.data = data;
        }
      });
      projects.push(repo);
    }
    return projects;
  }

  Github.prototype.function = url(){
    if(type=="user"){
      return "https://api.github.com/users/"+id+"/repos"
    }
    else{
      return "https://api.github.com/orgs/"+id+"/repos"
    }
  };

  Github.prototype.function = format(){
    var projects = projects();
    var bin = [];
    for(var i=0; i<projects.length; i++){

    }
  }
};
