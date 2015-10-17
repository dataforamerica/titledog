/**
 * Created by vincent on 9/12/15.
 */
 var titledog = angular.module("titledog", ['ngAnimate', 'ui.bootstrap']);

titledog.controller("AppCtrl", function ($http, $scope) {
    //var app = this;
    var url = "http://localhost:3000";
    $scope.locResults = [];
    $scope.title = "";




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
        $scope.title = v.county_display.state + ' / ' + v.county_display.county + ' (' +v.county_display.fips+')';
        console.log(v)
    };



    loadGeoDetails();
}).directive('headerSearch', function(){
    return{
        restrict: 'E',
        templateUrl: 'header.html'
    };
});