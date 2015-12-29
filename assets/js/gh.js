

window.Github = function() {
  this.repositories = null;
  Github.prototype.init = function(){
    var self = this;
    this.repositories = [
        {"id":"avecchio","type":"user"},
        {"id":"vortexlaboratory","type":"org"},
        {"id":"binary-labs","type":"org"},
        {"id":"sprocket-games","type":"org"},
        {"id":"power-house","type":"org"},
      ];
  }
  Github.prototype.index = function(){
    var self = this;
    var repos = self.projects();
    return self.format(repos);
  }

  Github.prototype.projects = function(){
    var self = this;
    var repos = self.repositories;
    var metadata = [];

    for(var i=0; i<repos.length; i++){
      $.ajax({
        url: self.url(repos[i].id,repos[i].type),
        async: false,
        data: {format: 'json'},
        error: function(){
          console.log('Error has occured retrieving repository: '+repo.name);
        },
        success: function(data){
          metadata.push(data);
        },
      });
    }
    return metadata;
  }

  Github.prototype.format = function(data){
//    var projects = projects();
    var bin = [];
//    for(var i=0; i<projects.length; i++){

//    }
  }

  Github.prototype.url = function(id,type){
    if(type=="user"){
      return "https://api.github.com/users/"+id+"/repos"
    }
    else{
      return "https://api.github.com/orgs/"+id+"/repos"
    }
  }
}
