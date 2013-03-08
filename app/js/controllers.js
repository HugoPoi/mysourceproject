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

function ProjectDetailCtrl($scope, $routeParams, Project, $location) {
	Project.query({action:'select',ID_Projet: $routeParams.projectId}, function(project) {
		$scope.project = project[0];
		$scope.rating = [0,0,0,0,0];
		
		if($scope.project.buy == 1) { 
			$scope.mark = function(val){ $scope.rating = [0,0,0,0,0];
				convertstar(val); //remplissage des étoiles après le clic
				markproject(val); //donne la note correspondant au clic
				
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
	
	$scope.postercom = function(com) {
		$scope.project.commentaire=com;
		console.log(com);
	};
	$scope.resetcom = function(com){ $scope.com="";}
	
	function convertstar(val){
		
		 var color=5-val;
		var k=4;
			for(var j=0;j<color;j++)
			{			
				$scope.rating[k]=1;
				k--;}
	}
	function markproject(val){
	if(val==4)
	$scope.project.note=1;
	if(val==3)
	$scope.project.note=2;
	if(val==2)
	$scope.project.note=3;
	if(val==1)
	$scope.project.note=4;
	if(val==0)
	$scope.project.note=5;
	
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
	$scope.uploadProjectForm =function(project) {
		/* récupérer et  faire l'enregistrement des fichiers dans les dossiers */ 
	}
	
}
function RegisterProjectCtrl($scope, Project, Categorie, $routeParams,$location) {
	$scope.registerProjectForm = function(project){
		project.Path_Projet ='dfghjkl';
		project.Prix_projet ='1';
		project.Path_Code_Demo = 'dfghjkl';
		Project.save(project, function(respond){
			if(respond.success !== undefined){
				$location.path('/upload/' +$routeParams.projectId);
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
