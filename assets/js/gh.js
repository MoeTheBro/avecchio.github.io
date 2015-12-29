

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
          for(var j=0; j<data.length; j++){
            metadata.push(data[i]);
          }
        },
      });
    }
    return metadata;
  }

  Github.prototype.format = function(data){
    var projects = [];
    var name_records = [];
    for(var i=0; i<data.length; i++){
      var exist = false;
      var lang = data[i].language;
      var exists = false;
      var pos = -1;
      for(var j=0; j<projects.length; j++){
        console.log(lang);
          if(projects[i].class == lang){
            exists = true;
            pos = j;
          }
        }
      }
      if(exists == false){
        if(lang == null){
          projects.push({"class":"unknown","repos":[]});
        }
        else{
          projects.push({"class":lang,"repos":[]});
        }
      }
      else{
        console.log(j);
      }
/*      console.log(data);
      if((exist == false)&&(lang != null)){
        projects.push({"class":lang,"repos":[]});
      }
//      projects.push(data[i]);
*/

    console.log(projects);
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
