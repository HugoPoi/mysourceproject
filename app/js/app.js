'use strict';

/* App Module */

angular.module('mySourceProject', ['mySourceProjectFilters', 'mySourceProjectServices','mySourceProjectDirectives']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/home', {templateUrl: 'partials/project-list.html',   controller: ProjectListCtrl}).
      /*when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).*/
      otherwise({redirectTo: '/home'});
}]);
