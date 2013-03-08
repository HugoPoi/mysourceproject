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
	Project.query({action:'select',ID_Projet: $routeParams.projectId}, function(project) {
		$scope.project = project[0];
		if(project[0].buy != 0) {$scope.button = 'Download'} else { $scope.button = 'Acheter' }
	});
	$scope.buy = function() {
		if($scope.project.buy){
			$location.path('/download/'+$routeParams.projectId);
		}
		else {
			$location.path('/buy/'+$routeParams.projectId);
		}
	}
	$scope.postercom = function(com) {
		$scope.project.commentaire=com;
		console.log(com);
	};
	$scope.resetcom = function(com){ $scope.com="";}
  
}

function NavigationCtrl($scope,$routeParams,$location, $rootScope, Categorie){
	$scope.categories = Categorie.query();
	$scope.ishome = ($location.path() =='/home');
	$rootScope.$on('$routeChangeSuccess', function(){
		$scope.ishome = ($location.path() =='/home');
	});
}


function RegisterCtrl($scope, User){
  
  $scope.registerForm = function(user){
      if(user.mot_de_passe == user.confirm_mdp){
        console.log(User.save(user));
      }
	  if(user)
	  $scope.registerOK="Ok";
	  else $scope.registerOK="";
    }
}

function UserCtrl($scope,$location, Login,$rootScope){
  Login.login({},function(profile){
    if(profile.error === undefined){
        $scope.profile = profile;
        $rootScope.profile = profile;
      }
    })
	$scope.login = function(user) {
    Login.login(user,function(profile){
      if(profile.error === undefined){
      $scope.profile = profile;
      $rootScope.profile = profile;
      }
      });
	}
  $scope.logout = function(){
      Login.login({'deconnection': true}, function(){
          $scope.profile = false;
          $rootScope.profile = false;
        });
    }
	$scope.register = function(){
		$location.path('/register'); 
	}
	$scope.myprojects = function() {
	$location.path('/myprojects');
	}
}

function BuyCtrl($scope, $routeParams, Project, $location) {
	Project.query({projectId: $routeParams.projectId}, function(project) {
		$scope.project = project[0];
	});
	$scope.confirm = function() {
		console.log("ACHAT EFFECTUE");
		$location.path('/project/' +$routeParams.projectId);
	}
	$scope.reset = function() {
		console.log("ACHAT ANNULE");
		$location.path('/home');
	}
}

function RegisterProjectCtrl($scope,Project,Categorie,$location){
	$scope.registerProjectForm = function(project){
		console.log("envoie infos projets ok");
		$location.path('/upload-project/' +$routeParams.projectId);
		
		}
}
function ProjectUploadCtrl($scope, Project, Categorie) {
	$scope.uploadProjectForm = function(project){
    project.Path_Projet ='dfghjkl';
    project.Prix_projet ='1';
    project.Path_Code_Demo = 'dfghjkl';
    Project.save(project, function(error){
      if(error.success !== undefined){
        console.log('success');
     }
   });
	}
	$scope.categories = Categorie.query();
}

function ShowMyProjectsCtrl($scope,$routeParams,Project,$location) {
	
	$scope.projectBuy = Project.query(); //à compléter
	$scope.projectDL= Project.query(); //à compléter
	/*lien de telechargement de chaque projet acheté par l'utilisateur*/
	$scope.download = function(project) {
		
	}
	
}
