let app = angular.module('meuPrimeiroApp', ['ngRoute', 'ngMaterial']);
app.factory('FacRepos', function($http){
    return function(url, scope){
        return{
            url: url,
            scope: scope,
            get: function(){
            $http.get(url)
                .then(function successCallback(response) {
                    scope.repos = response.data;
                    console.log(scope.repos);
                }, function errorCallback(response) {
                    console.log('Error: ' + response);
                });
          }
        }
    }
});

app.factory('FacFollowers', function($http){
    return function(url, scope){
        return{
            url: url,
            scope: scope,
            get: function(){
            $http.get(url)
                .then(function successCallback(response) {
                    scope.followers = response.data;
                    console.log(scope.followers);
                }, function errorCallback(response) {
                    console.log('Error: ' + response);
                });
          }
        }
    }
});

app.directive('listRepos', function(){
    return{
        restrict: "AEC",
        templateUrl: 'templates/repo.tmpl.html'
    }
});

app.directive('listSeguidores', function(){
    return{
        restrict: "AEC",
        templateUrl: 'templates/follow.tmpl.html'
    }
});

app.controller("primeiroCtrl", function($scope, $http, $location){
    $scope.clickRepos = function() {
        $location.url("/repos");
    }

    $scope.clickSeguidores = function() {
        $location.url("/seguidores");
    }
});

app.controller("reposCtrl", function($scope, $http, FacRepos){
    $scope.repos = [];
    var reposGithub = FacRepos(
    "https://api.github.com/users/mateus/repos?client_id=8535bac83251149ac427&client_secret=0e7a3f067fb90c1a2f45c2e771dff96bed954989",
    $scope);
    reposGithub.get();
    console.log("teste");
});

app.controller("seguidoresCtrl", function($scope, $http, FacFollowers){
    $scope.followers = [];
    var followersGithub = FacFollowers(
    "https://api.github.com/users/arthurassuncao/followers?client_id=8535bac83251149ac427&client_secret=0e7a3f067fb90c1a2f45c2e771dff96bed954989",
    $scope);
    followersGithub.get();
});

app.config( [ '$routeProvider' , function($routerProvider){
$routerProvider
    .when('/repos', {
        controller: "reposCtrl",
        templateUrl: 'templates/repos.html'
    })
    .when('/seguidores', {
        controller: "seguidoresCtrl",
        templateUrl: 'templates/seguidores.html'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
