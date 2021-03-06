'use strict';

/* Services */

angular.module('mySourceProjectServices', ['ngResource']).
    factory('Project', function($resource){
  return $resource('api/project.:action.php', {}, {
    query: {method:'GET', params:{action:'all'}, isArray:true},
    save: {method:'PUT', params:{action:'save'}, isArray:false},
    upload: {method:'POST', params:{action:'upload'}, isArray:false}
  });
}).factory('Categorie', function($resource){
  return $resource('projects/categorie.json', {}, {
    query: {method:'GET', params:{} , isArray:true}
  });
}).factory('User', function($resource){
  return $resource('api/Utilisateur.php', {}, {
    save: {method:'PUT', params:{} , isArray:false}
  });
}).factory('Login', function($resource){
  return $resource('api/login.php', {}, {
    login: {method:'PUT', params:{} , isArray:false}
  });
}).factory('Achat', function($resource){
  return $resource('api/achat.:action.php', {}, {
    buy: {method:'PUT', params:{action:'buy'} , isArray:false},
    comment: {method:'PUT', params:{action:'comment'} , isArray:false}
  });
});
