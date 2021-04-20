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
    $('.mobile-wa-carousel').on('changed.owl.carousel', function (e) {
        let currentIndex = e.item.index;
        switch(currentIndex) {
            case 2: $scope.video = 'go_personal';
            break;
            case 3: $scope.video = 'super_app';
            break;
            case 4: $scope.video = '11x_sales';
            break;
            case 5: $scope.video = 'highest_open_rate';
            break;
            case 6: $scope.video = 'go_personal';
            break;
        }
        $scope.$applyAsync();
    });

    $('.dashboard-carousel').on('changed.owl.carousel', function (e) {
        // console.log("current: ",e.item.index) //same
        console.log('Fired2');
    });
});