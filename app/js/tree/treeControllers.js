'use strict';

/*basic controller*/
angular.module('treeControllers',['treeServices'])
    .controller('basicTreeCtrl', ['$scope','treeFactory', function ($scope, treeFactory) {
        $scope.data = treeFactory.getTree({ name: 'basic' });
    }])
    .controller('drapTreeCtrl', ['$scope','treeFactory', function ($scope, treeFactory) {
        $scope.tree1 =$scope.data = treeFactory.getTree({ name: 'basic' });
        $scope.tree2 = $scope.data = treeFactory.getTree({ name: 'basic' });
    }])
    .controller('handleTreeCtrl', ['$scope','treeFactory', function ($scope, treeFactory) {
        $scope.data = treeFactory.getTree({ name: 'basic' });
        //删除
        $scope.remove = function (scope) {
            scope.remove();
        };
        //展开
        $scope.toggle = function (scope) {
            scope.toggle();
        };
        //新增
        $scope.newSubItem = function (scope) {
            var nodeData = scope.$modelValue;
            nodeData.nodes.push({
                id: nodeData.id * 10 + nodeData.nodes.length,
                title: nodeData.title + '.' + (nodeData.nodes.length + 1),
                nodes: []
            });
        };
        //drap
        $scope.treeOptions = {
            dragStop: function() {
                alert('drap');
            }
        };
    }]);
