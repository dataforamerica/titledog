/**
 * Created by vincent on 9/12/15.
 */
 var titledog = angular.module("titledog", ['ngAnimate', 'ui.bootstrap']);

titledog.controller("AppCtrl", function ($http, $scope) {
    //var app = this;
    var url = "http://localhost:3000";
    $scope.locResults = [];
    $scope.title = "";
    $scope.result = {};
    $scope.dataSources = {};
    $scope.hasResult = false;




    //app.saveGeoDetail = function (geodetail) {
    //    $http.post(url + "/geodetail/add/", {geodetail: geodetail}).success(function () {
    //        loadGeoDetails();
    //    })
    //}

    function loadGeoDetails() {
        $http.get(url).success(function (products) {
            app.products = products;
        })
    }

    /*$scope.getLocation = function(location){
        $http.get(url + "/" + location).success(function (products) {
            $scope.locResults = products;
        })
    };*/

    $scope.getLocation = function(location) {
        return $http.get(url + "/" + location).then(function(response){
            return response.data;

        });
    };

    $scope.$watch('what', function(val){
        console.log(val);
    });

    $scope.setPcode = function(v){
        if(v != null && v!= undefined)
        {
            $scope.result = v;
            $scope.dataSources = v.data_sources;
            $scope.hasResult = true;
        }
        //$scope.title = v.county_display.state + ' / ' + v.county_display.county + ' (' +v.county_display.fips+')';
        console.log(v)
    };

    $scope.$watch('selected', function(query){
        if(query == null || query == '' || query == undefined)
        {
            $scope.result = {};
            $scope.dataSources = {};
            $scope.hasResult = false;
        }
    });
    $scope.$watch('dataSources', function(val){
        console.log(val.length);
    });



    loadGeoDetails();
}).directive('headerSearch', function(){
    return{
        restrict: 'E',
        templateUrl: 'header.html'
    };
});