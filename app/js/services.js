'use strict';

/* Services */

angular.module('mySourceProjectServices', ['ngResource']).
    factory('Project', function($resource){
  return $resource('projects/:projectId.json', {}, {
    query: {method:'GET', params:{projectId:'all'}, isArray:true}
  });
});
