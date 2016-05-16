'use strict';

app.directive("handleMenu", function () {
    return {
        restrict: 'A',
        scope: true,
        link: function(scope, element, attr) {
            element.find("a").on("click", function (e) {
                scope.$apply(function () {
                    scope.collapsed = !scope.collapsed;
                });
            });
        }
    }
})
    .directive("menuBar", function () {
        return {
            restrict: 'A',
            scope:{
                clickClass:'@',
                activeClass:'@'
            },
            link: function (scope, element, attr) {
                var ele = element.find("."+scope.clickClass);
                ele.on("click", function () {
                    ele.removeClass(scope.activeClass);
                    $(this).addClass(scope.activeClass);
                });
            }
        }
    });