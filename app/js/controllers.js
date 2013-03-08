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
		$scope.projects = viewprojects;
	});
	
}

function ProjectDetailCtrl($scope, $routeParams, Project, $location, Achat) {
	function MajProject() {
  Project.query({action:'select',ID_Projet: $routeParams.projectId}, function(project) {
		$scope.project = project[0];
    console.log(convertstar(project[0].rate));
		$scope.rating = convertstar(project[0].rate);
    
		if($scope.project.buy == 1) { 
			$scope.mark = function(val){
        Achat.comment({Note_Achat: convertrate(val), ID_Projet:$routeParams.projectId},function(respond){
      if(respond.success !== undefined){
          MajProject();
        }
    })
				console.log(convertrate(val));
     }
			$scope.button = 'Download';
			$scope.buy = function() {$location.path('/download/'+$routeParams.projectId);}
			} else { 
			$scope.button = 'Acheter';
			$scope.buy = function() {
				/*Si on appuie sur acheter sans être loggé redirection home*/
				if(!$scope.profile)
				{$location.path('/register');	}
				else
				$location.path('/buy/'+$routeParams.projectId);
			}
		}
	});
  }
  MajProject();
  
	$scope.postercom = function(com) {
    Achat.comment({Commentaire: com.Commentaire, ID_Projet:$routeParams.projectId},function(respond){
      if(respond.success !== undefined){
          MajProject();
        }
    })
	};
	$scope.resetcom = function(com){ $scope.com="";}
	
	function convertstar(val){
		val = Math.round(val);
     var ratingtab = [];
			for(var j=0;j<5;j++)
			{			
				if((5-j) <= val ) ratingtab[j]=1;
        else ratingtab[j]=0;
      }
      return ratingtab;
	}
  
  function convertrate(val){
      return 5 - val;
    }
	
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
			User.save(user,function(error){
				if(error.success !== undefined) $scope.registerOK="Ok";
			});
		}
		
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
			$location.path('/home');
		});
	}
	$scope.register = function(){
		$location.path('/register'); 
	}
	$scope.myprojects = function() {
		$location.path('/myprojects');
	}
}

function BuyCtrl($scope, $routeParams, Project, $location, Achat, $filter) {
	Project.query({action:'select', ID_Projet: $routeParams.projectId}, function(project) {
		$scope.project = project[0];
	});
	$scope.confirm = function() {
		
		var formatDate = $filter('date');
		Achat.buy({'Date_Achat': formatDate(Date.now(),'yyyy-MM-dd'),'ID_Projet': $routeParams.projectId}, function(respond){
			console.log(respond);
			if(respond.success !== undefined){
				$location.path('/project/' +$routeParams.projectId);
			}
		})
		
	}
	$scope.reset = function() {
		console.log("ACHAT ANNULE");
		$location.path('/home');
	}
}

function ProjectUploadCtrl($scope,Project,Categorie,$routeParams,$location){
    
    $scope.projectid = $routeParams.projectId;
    $scope.maj = function(respond){
        console.log("UPLOADED"+respond);
      }
    
  }
function RegisterProjectCtrl($scope, Project, Categorie, $routeParams,$location) {
	$scope.registerProjectForm = function(project){
		project.Path_Projet ='dfghjkl';
		project.Prix_projet ='1';
		project.Path_Code_Demo = 'dfghjkl';
		Project.save(project, function(respond){
			if(respond.success !== undefined){
				$location.path('/upload/' + respond.ID_Projet);
				console.log(respond);
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
