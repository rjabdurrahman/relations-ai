const app = angular.module('myApp', []);
app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});
app.controller('myCtrl', function ($scope) {
    $scope.videoMode = true;
    $scope.video = 'go_personal';
    $scope.videoPrefix = function () {
        return $scope.videoMode ? 'messenger_' : 'whatsapp_';
    }
    $scope.dashboardImg = 'analytics.jpg';
    $('.mobile-wa-carousel').on('changed.owl.carousel', function(event) {
        console.log('Fired');
    });

    $('.dashboard-carousel').on('changed.owl.carousel', function(event) {
        console.log('Fired2');
    });
});