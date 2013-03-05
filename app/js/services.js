'use strict';

/* Services */

angular.module('mySourceProjectServices', ['ngResource']).
    factory('Project', function($resource){
  return $resource('project/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'all'}, isArray:true}
  });
});
