var app = angular.module('myapp', []);

app.controller('DemoCtrl', function($http,$scope) {

    var ctrl = this;

    var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
    //var cityName = document.getElementById("search_box").value;


    $scope.request = {
        method: 'GET',
        url: URL,
        params: {
            q: 'Houston',
            mode: 'json',
            units: 'imperial',
            cnt: '7',
            appid: 'f2327cca8f3d665f4c9f73b615b294ed'
        }
    }
    function test() {


        $http($scope.request)
            .then(function (response) {

                ctrl.data = response.data;
                console.log(ctrl.data);
            })
    }

    $scope.$watch('request.params.q',function () {

        test();

    })


})

