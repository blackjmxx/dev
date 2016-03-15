appDirectives.directive('micelloMap', ['$timeout','Map', function($timeout, Map) {
   return {
        scope : true,
        link: function (scope) {
            micello.maps.init("b35m9XzWoWx2s9ActCLP8irN7KXqUh", mapInit);

            function  mapInit()  {
            var  mapControl  =  new  micello.maps.MapControl('mapElement');
            var  mapDataObject  =  mapControl.getMapData();
            //  Finally,  load  the  map:
            mapDataObject.loadCommunity(19874);
          }
        },
        //templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) + '../partials/map.html',
        templateUrl: '../partials/map.html',
        controller: function ($scope) {
        },
   }}]);
