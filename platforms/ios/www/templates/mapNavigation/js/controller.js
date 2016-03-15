appControllers.controller('MapController', function($scope,Map) {

   $scope.image_height = document.getElementById('menu-dashboard-content').clientHeight - document.getElementsByTagName("ion-header-bar")[0].clientHeight;
   $scope.image_width = document.getElementById('menu-dashboard-content').clientWidth ;


        $scope.mapInit1 = function () {

				$scope.mapControl = new micello.maps.MapControl('mapElement');

				$scope.mapDataObject = $scope.mapControl.getMapData();

        $scope.mapDataObject.mapChanged = $scope.onMapChanged;

				$scope.mapDataObject.loadCommunity(19874);
}

 $scope.onMapChanged1 = function onMapChanged (e) {
    if (e.comLoad) {
     Map.mapdata = $scope.mapDataObject;
     $scope.level = $scope.mapDataObject.getCurrentLevel();
     $scope.mapControl.requestNavFromGeom($scope.level.g[Map.locationTosearch], $scope.level.id, true)
            }
          }
})
