/**
 * Created by yjw9012 on 3/30/16.
 */
const controllersModule = angular.module("exampleApp.Controllers", []);

controllersModule.controller("dayCtrl", function ($scope, days) {
    $scope.day = days.today;
});

controllersModule.controller("tomorrowCtrl", function ($scope, days) {
    $scope.day = days.tomorrow;
});