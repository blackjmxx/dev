appControllers.controller('MapController', function($scope,Map) {

        $scope.mapInit = function mapInit() {

				$scope.mapControl = new micello.maps.MapControl('mapElement');

				$scope.mapDataObject = $scope.mapControl.getMapData();

        $scope.mapDataObject.mapChanged = $scope.onMapChanged;

				$scope.mapDataObject.loadCommunity(19874);
}

 $scope.onMapChanged = function onMapChanged (e) {
    if (e.comLoad) {
     Map.mapdata = $scope.mapDataObject;
     $scope.level = $scope.mapDataObject.getCurrentLevel();
     $scope.mapControl.requestNavFromGeom($scope.level.g[Map.locationTosearch], $scope.level.id, true)
            }
          }
})
