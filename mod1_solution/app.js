(function() {
    'use strict';
    angular.module('module1_sol_app', [])
        .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];

    function MsgController($scope) {
        $scope.name = "Farhan";
    }

})();