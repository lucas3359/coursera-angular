(function(){
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope){
  $scope.name = "Lucas";
  $scope.sayHellow = function(){
    return "Hellop Coursera";
  };
});


})();
