'use strict';

/* Controllers */

function ProjectListCtrl($scope, Project) {
    Project.query(null, function(projects){
    console.log(projects);
    var viewprojects = [];
    for(var i = 0; i < projects.length; i++){
            console.log("test"+ (i%2));
      if(i%2 == 0){
        viewprojects.push([projects[i],projects[i+1]]);
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
