'use strict';

/* Controllers */

function ProjectListCtrl($scope, Project) {
    Project.query(null, function(projects){
    var viewprojects = [];
    for(var i = 0; i < projects.length; i++){
      if(i%4 == 0){
        var container = [];
        for(var j = 0 ; j < 4 ; j++){
          if(projects[i+j] !== undefined){
            container.push(projects[i+j]);
          }else break;
        }
        viewprojects.push(container);
      }
    }
    console.log(viewprojects);
    $scope.projects = viewprojects;
  });

}

function ProjectDetailCtrl($scope, $routeParams, Project) {
  Phone.query({projectId: $routeParams.projectId}, function(project) {
    $scope.project = project;
  });

  /*$scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }*/
}

function NavigationCtrl($scope, Categorie){
  $scope.categories = Categorie.query();
}
