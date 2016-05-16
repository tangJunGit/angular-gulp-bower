'use strict';

angular.module('treeServices', ['ngResource'])
    .factory('treeFactory',['$resource', function($resource){
        return $resource("js/tree/:name.json",{name: "@name"},{
            getTree:{
                method:"GET",
                isArray:true
            }
        });
    }]);

