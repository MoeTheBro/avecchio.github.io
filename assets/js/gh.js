/*
window.TemplateGraph = function() {
	this.GraphDiv = null;
	this.EditorDiv = null;

	this.Nodes = new Array();
	this.Links = new Array();

	this.Fill = null;
	this.Force = null;
	this.LinkSelection = null;
	this.NodeSelection = null;

	TemplateGraph.prototype.drawGraph = function(graphDiv, editorDiv, width, height) {

*/
window.Github = function(){

  this.repositories = null;

  Github.prototype.init = function(){
    this.repositories = {
        {id="avecchio",type="user"},
        {id="vortexlaboratory",type="org"},
        {id="binary-labs",type="org"},
        {id="sprocket-games",type="org"},
        {id="power-house",type="org"},
      };
  }

  Github.prototype.function = projects(){
    return this.format();
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
*/
}
