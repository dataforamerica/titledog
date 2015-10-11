/**
 * Created by vincent on 9/12/15.
 */
 var titledog = angular.module("titledog", []);

titledog.controller("AppCtrl", function ($http) {
    var app = this;
    var url = "http://localhost:3000";

    app.saveGeoDetail = function (geodetail) {
        $http.post(url + "/geodetail/add/", {geodetail: geodetail}).success(function () {
            loadGeoDetails();
        })
    }

    function loadGeoDetails() {
        $http.get(url + "/geodetail/").success(function (geodetails) {
            app.geodetails = geodetails;
        })
    }

    loadGeoDetails();
});