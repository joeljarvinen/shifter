var app = angular.module('ghPages', [
    'ngRoute'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'partials/index.html',
                controller: 'MainCtrl'
            }
        ).when('/hours', {
                templateUrl: 'partials/hours.html',
                controller: 'MainCtrl'
            }
        ).otherwise({
                redirectTo: '/'
            }
        );
    }
]);

app.controller('MainCtrl', function($scope) {
    $scope.hours = [
        {
            date: '11.03',
            hours: 2.5
        }
    ]
});