let app = angular.module("meuPrimeiroApp", []);
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

app.directive('listDirective', function(){
    return{
        restrict: "AE",
        template: '<ul><li ng-repeat="repo in repos | filter:{name: termo }"><a href="{{repo.html_url}}"> {{ repo.name }}</a></li></ul>'
    }
});

app.controller("primeiroCtrl", function($scope, $http, FacRepos){
    $scope.repos = [];
    var reposGithub =
    FacRepos("https://api.github.com/users/arthurassuncao/repos?client_id=8535bac83251149ac427&client_secret=0e7a3f067fb90c1a2f45c2e771dff96bed954989", $scope);
    reposGithub.get();
});
