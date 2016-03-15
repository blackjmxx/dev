angular.module('cadynoApp')
.directive('micelloMap', function($timeout, CadynoService) {
   return {
        scope : true,
        link: function (scope) {
          micello.maps.init("f1484f3b-34be-43d1-a446-ce3e6599a037",scope.mapInit);
        },
                    templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) + '../partials/map.html',
                    //templateUrl: '../partials/map.html',
        controller: function ($scope) {
        },
   }
 });
