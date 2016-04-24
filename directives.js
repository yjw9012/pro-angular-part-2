/**
 * Created by yjw9012 on 4/24/16.
 */
angular.module("customDirectives", ["customServices"])
    .directive("triButton", function (logService) {
        return {
            scope: {counter: "=counter"},
            link: function (scope, element, attrs) {
                element.on("click", function (event) {
                    logService.log("Button click: " + event.target.innerText);
                    scope.$apply(function () {
                        scope.counter++;
                    });
                });
            }
        }
    });