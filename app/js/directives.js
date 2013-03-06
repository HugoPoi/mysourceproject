'use strict';

/* Directives */

angular.module('mySourceProjectDirectives', []).directive('mainNavigation', function() {
  var directiveDefinitionObject = {
    priority: 0,
    templateUrl: 'partials/main-navigation.html',
    replace: true,
    transclude: false,
    restrict: 'A',
    scope: false
  };
  return directiveDefinitionObject;
});