const {dialog} = require('electron').remote

app.controller('InicioCtrl', [
    '$scope',
    '$http',
    '$state',
    function ($scope, $http, $state) {
        $scope.prueba = 'prueba';
  
        $scope.vamo = function(){
            console.log(dialog.showOpenDialog())
            $state.go('uno');
        };
    }]);
