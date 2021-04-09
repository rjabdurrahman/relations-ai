const app = angular.module('myApp', []);
app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});
app.controller('myCtrl', function ($scope) {
    $scope.videoMode = 'messenger_';
    $scope.video = 'go_personal';
    console.log($scope.video)
});