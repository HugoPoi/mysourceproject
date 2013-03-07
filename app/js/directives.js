'use strict';

/* Directives */

angular.module('mySourceProjectDirectives', []).directive('mainNavigation', function() {
  var directiveDefinitionObject = {
    priority: 0,
    templateUrl: 'partials/main-navigation.html',
    replace: true,
    transclude: false,
    restrict: 'A',
    scope: false,
    controller: 'NavigationCtrl'
    };
  return directiveDefinitionObject;
}).directive('user', function() {
  var directiveDefinitionObject = {
    priority: 0,
    templateUrl: 'partials/user.html',
    replace: true,
    transclude: false,
    restrict: 'A',
    scope: false,
    controller: 'UserCtrl'
  };
  return directiveDefinitionObject;
  
  
 
});