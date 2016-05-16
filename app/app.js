var app = angular.module('app', ['ui.router', 'ui.tree','treeControllers']);
/**
 * route
 */
app.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider) {
    $urlRouterProvider
        .when('/admin','/admin/welcome')
        .otherwise('error');

    $stateProvider
        .state('/',{
            url:'',
            controller: '',
            templateUrl:'partials/login.html'
        })
        .state('admin',{
            url:'/admin',
            templateUrl:'partials/admin.html'
        })
        .state('admin.welcome',{
            url:'/welcome',
            templateUrl:'partials/welcome.html'
        })
        /*----- tree  ----------*/
        .state('admin.basicTree',{
            url:'/tree/basic',
            controller:'basicTreeCtrl',
            templateUrl:'partials/tree/basic.html'
        })
        .state('admin.drapTree',{
            url:'/tree/drap',
            controller:'drapTreeCtrl',
            templateUrl:'partials/tree/drap.html'
        })
        .state('admin.handleTree',{
            url:'/tree/handle',
            controller:'handleTreeCtrl',
            templateUrl:'partials/tree/handle.html'
        })
        .state('error',{
            url:'/error',
            templateUrl:'partials/404.html'
        });
}]);

