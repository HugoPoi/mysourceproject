'use strict';

/* Services */

angular.module('mySourceProjectServices', ['ngResource']).
    factory('Project', function($resource){
  return $resource('projects/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'all'}, isArray:true}
  });
});
