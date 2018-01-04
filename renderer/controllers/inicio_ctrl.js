const {dialog} = require('electron').remote

app.controller('InicioCtrl', [
    '$scope',
    '$http',
    '$state',
    function ($scope, $http, $state) {
        $scope.prueba = 'prueba';
  
        $scope.vamo = function(){
            // $state.go('uno');
            console.log(dialog.showOpenDialog())
        };
    }]);
