/**
 * Created by yjw9012 on 5/7/16.
 */
angular.module("exampleApp", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider.when("/list", {
            templateUrl : "/chapter21-22/tableView.html"
        });

        $routeProvider.when("/create", {
            templateUrl : "/chapter21-22/editorView.html"
        });

        $routeProvider.when("/edit/:id", {
            templateUrl : "/chapter21-22/editorView.html"
        });

        $routeProvider.when("/edit/:id/:data*", {
            templateUrl : "/chapter21-22/editorView.html"
        });

        $routeProvider.otherwise({
            templateUrl : "/chapter21-22/tableView.html"
        });
    })
    .controller("defaultCtrl", function ($scope, $location, $route, $routeParams) {
        $scope.currentProduct = null;

        $scope.$on("$routeChangeSuccess", function () {
            if ($location.path().indexOf("/edit/") == 0) {
                var id = $routeParams["id"];
                for (var i = 0; i < $scope.products.length; i++) {
                    if ($scope.products[i].id == id) {
                        $scope.currentProduct = $scope.products[i];
                        break;
                    }
                }
            }
        });

        $scope.listProducts = function () {
            $scope.products = [
                {id: 0, name: "Dummy1", category: "Test", price: 1.25},
                {id: 1, name: "Dummy2", category: "Test", price: 2.45},
                {id: 2, name: "Dummy3", category: "Test", price: 4.25}
            ];
        };

        $scope.deleteProduct = function (product) {
            $scope.products.splice($scope.products.indexOf(product), 1);
            $location.path("/list");
        };

        $scope.createProduct = function (product) {
            $scope.products.push(product);
            $location.path("/list");
        };

        $scope.updateProduct = function (product) {
            for (var i = 0; i < $scope.products.length; i++) {
                if ($scope.products[i].id == product.id) {
                    $scope.products[i] = product;
                    break;
                }
            }
            $location.path("/list");
        };

        $scope.saveEdit = function (product) {
            if (angular.isDefined(product.id)) {
                $scope.updateProduct(product);
            } else {
                $scope.createProduct(product);
            }
            $scope.currentProduct = {};
        };

        $scope.cancelEdit = function () {
            $scope.currentProduct = {};
            $location.path("/list");
        };

        $scope.listProducts();
    });