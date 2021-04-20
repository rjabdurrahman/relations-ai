let dashboardImgs = ['all_in_inbox.png', 'analytics.jpg', 'order_management.jpg', 'customer_insight.jpg']
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
    $scope.dashboardImg = 'all_in_inbox.png';
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
        let currentIndex = e.item.index;
        switch(currentIndex) {
            case 2: $scope.dashboardImg = dashboardImgs[0];
            break;
            case 3: $scope.dashboardImg = dashboardImgs[1];
            break;
            case 4: $scope.dashboardImg = dashboardImgs[2];
            break;
            case 5: $scope.dashboardImg = dashboardImgs[3];
            break;
            case 6: $scope.dashboardImg = dashboardImgs[0];
            break;
        }
        $scope.$applyAsync();
    });
    let imgIdx = 0;
    let dashboardTimer = null;
    $scope.dashboardSlider = function () {
        dashboardTimer = setInterval(function() {
            if(imgIdx > 3) imgIdx = 0;
            $scope.dashboardImg = dashboardImgs[imgIdx++];
            $scope.$applyAsync();
        }, 1500);
    }
    $scope.dashboardSlider();
    $scope.stopDashboarSliding = function() {
        clearInterval(dashboardTimer);
    }
});