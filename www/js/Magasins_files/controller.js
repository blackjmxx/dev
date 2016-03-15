appControllers.controller('productsCtrl', function ($scope,$ionicHistory, $state, products, CartsProducts, $timeout, $mdToast) {

    $scope.total = 0;

    $scope.delete = function(product) {
        $scope.products.splice($scope.products.indexOf(product), 1);
      }

    $scope.products = products.all();

    $scope.showToast = function (productName) {
        //Calling $mdToast.show to show toast.
        $mdToast.show({
            controller: 'toastController',
            templateUrl: 'toast.html',
            hideDelay: 800,
            position: 'top',
            locals: {
                displayOption: {
                    title: 'Add ' + productName + " to plan !!"
                }
            }
        });
    }

    $scope.addProductToList = function (product) {
            CartsProducts.ordersProducts.push(product);
              $scope.showToast(product.name);
            $scope.delete(product);
            $scope.total = CartsProducts.total()
            $timeout(function () {
                // Do action event product
            }, 1000);
        };
  $scope.productCheckout = function(){
    $state.go('app.menu-dashboard')
  }

}); // End of menu toggle controller.
