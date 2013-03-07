'use strict';

/* Services */

angular.module('mySourceProjectServices', ['ngResource']).
    factory('Project', function($resource){
  return $resource('projects/:projectId.json', {}, {
    query: {method:'GET', params:{projectId:'all'}, isArray:true}
  });
}).factory('Categorie', function($resource){
  return $resource('projects/categorie.json', {}, {
    query: {method:'GET', params:{} , isArray:true}
  });
}).factory('User', function($resource){
  return $resource('/api/Utilisateur.php', {}, {
    save: {method:'PUT', params:{} , isArray:false}
  });
});
