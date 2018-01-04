var app = angular.module('app', ['ui.router']);
// const {remote} = require('electron');
app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
            .state('inicio', {
                url: '/',
                templateUrl: `${__dirname}/views/inicio.html`,
                controller: 'InicioCtrl',
                controllerAs: 'inicio_ctrl'
            })
            .state('uno', {
                url: '/uno',
                templateUrl: `${__dirname}/views/uno.html`,
                controller: 'DosCtrl',
                controllerAs: 'dos_ctrl'
            })

            ;
});