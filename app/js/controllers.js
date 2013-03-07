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
		if(project[0].achat) {$scope.button = 'Download'} else { $scope.button = 'Acheter' }
	});
	$scope.buy = function() {
		if($scope.project.achat){
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


function RegisterCtrl($scope, User){
  
  $scope.registerForm = function(user){
      if(user.mot_de_passe == user.confirm_mdp){
        console.log(User.save(user));
      }
    }
}

function UserCtrl($scope,$location, Login){
  Login.login({},function(profile){
    console.log(profile);
    if(profile.error === undefined){
        $scope.profile = profile;
      }
    })
	$scope.login = function(user) {
    Login.login(user,function(profile){
      if(profile.error === undefined){
      $scope.profile = profile;
      }
      });
	}
  $scope.logout = function(){
      Login.login({'deconnection': true}, function(){
          $scope.profile = false;
        });
    }
	$scope.register = function(){
		$location.path('/register'); 
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

function ProjectUploadCtrl($scope, Project) {
	$scope.uploadProjectForm = function(Project){ 
		console.log(Project);	
	}	
}

