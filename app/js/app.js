'use strict';

/* App Module */

angular.module('mySourceProject', ['mySourceProjectFilters', 'mySourceProjectServices','mySourceProjectDirectives']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/home', {templateUrl: 'partials/project-list.html',   controller: ProjectListCtrl}).
      when('/project/:projectId', {templateUrl: 'partials/project-detail.html', controller: ProjectDetailCtrl}).
      when('/register', {templateUrl: 'partials/register.html', controller: RegisterCtrl}).
      otherwise({redirectTo: '/home'});
}]);
