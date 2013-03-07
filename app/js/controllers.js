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

function ProjectDetailCtrl($scope, $routeParams, Project, $location) {
  Project.query({projectId: $routeParams.projectId}, function(project) {
    $scope.project = project[0];
  });
	$scope.buy = function() {
  $location.path('/buy/'+$routeParams.projectId);
  }
  /*$scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }*/
}

function NavigationCtrl($scope,$routeParams,$location, $rootScope, Categorie){
  $scope.categories = Categorie.query();
  $scope.ishome = ($location.path() =='/home');
  $rootScope.$on('$routeChangeSuccess', function(){
    $scope.ishome = ($location.path() =='/home');
  });
}

function RegisterCtrl($scope){
  
  $scope.registerForm = function(user){
      if(user.mot_de_passe == user.confirm_mdp){
        console.log("OK");
      }
      console.log(user);
    }
  
}

function UserCtrl($scope,$location){
  
  $scope.log=function() { console.log("LOGGIN");
  }
  $scope.register = function(){
      $location.path('/register'); 
  }
}

function BuyCtrl($scope) {

}
