(function() {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {


        $scope.GetStatus = function(items) {
            if (typeof items === "undefined" || items === "") {
                $scope.message = "Please enter data first";
                return '';
            }

            //removing white spaces
            var without_white_spaces = items.trim().split(' ').join('');
            // Get Item List
            var items_array = without_white_spaces.split(',');
            // removing ,, empty item list
            var valid_items = items_array.filter(n => n);
            var len = valid_items.length;
            console.log(valid_items)

            if (len <= 3) {
                $scope.message = "Enjoy!";
            } else if (len > 3) {
                $scope.message = "Too much!"
            } else {
                $scope.message = "Please enter data first";
            }

        };
    }

})();