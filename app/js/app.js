'use strict';

/* App Module */

angular.module('mySourceProject', ['mySourceProjectFilters', 'mySourceProjectServices','mySourceProjectDirectives']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/home', {templateUrl: 'partials/project-list.html',   controller: ProjectListCtrl}).
      when('/project/:projectId', {templateUrl: 'partials/project-detail.html', controller: ProjectDetailCtrl}).
      when('/register', {templateUrl: 'partials/register.html', controller: RegisterCtrl}).
	   when('/buy/:projectId', {templateUrl: 'partials/facturation.html', controller: BuyCtrl}).
	   when('/upload/:projectId', {templateUrl: 'partials/upload-project.html', controller: ProjectUploadCtrl}).
	   when('/register-project', {templateUrl: 'partials/register-project.html', controller: RegisterProjectCtrl}).
	   when('/myprojects', {templateUrl: 'partials/mesprojets.html', controller: ShowMyProjectsCtrl}).
      otherwise({redirectTo: '/home'});
}]);
