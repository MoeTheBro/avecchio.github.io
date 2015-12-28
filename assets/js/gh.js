var repositories = {
  {id="avecchio",type="user"},
  {id="vortexlaboratory",type="org"},
  {id="binary-labs",type="org"},
  {id="sprocket-games",type="org"},
  {id="power-house",type="org"},
}

function github_url(id,type){
  if(type=="user"){
    return "https://api.github.com/users/"+id+"/repos"
  }
  else{
    return "https://api.github.com/orgs/"+id+"/repos"
  }
}

function projects(){
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
  }
}
