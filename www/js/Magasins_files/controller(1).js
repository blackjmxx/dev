appControllers.controller('magasinsCtrl', function ($scope, $ionicHistory, $state, magasins, $stateParams) {

  $scope.isAnimated =  $stateParams.isAnimated;
  $scope.magasins = magasins.all();

// doSomeThing is for do something when user click on a button
  $scope.doSomeThing = function () {
    // You can put any function here.
  } // End doSomeThing.

  // goToSetting is for navigate to Dashboard Setting page
  $scope.goToSetting = function () {
      $state.go("app.expenseSetting");
  };

  $scope.magasins = magasins.all();

  $scope.goToMagasin = function(brand, id){
    // Here we are going to ....
    $state.go('');
  }

}); // End of menu toggle controller.