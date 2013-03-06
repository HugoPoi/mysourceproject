'use strict';

/* Controllers */

function ProjectListCtrl($scope, Project) {
    Project.query(null, function(projects){
    console.log(projects);
    var viewprojects = [];
    for(var i = 0; i < projects.length; i++){
      if(i%4 == 0){
        var container = [];
        for(var j = 0 ; j < 4 ; j++){
          if(projects[i+j] !== undefined){
            container.push(projects[i+j]);
          }else break;
        }
        viewprojects.push(container);
      }
    }
    console.log(viewprojects);
    $scope.projects = viewprojects;
  });

  //$scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];


/*
function PhoneDetailCtrl($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}
*/
//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
