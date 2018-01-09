var app = angular.module("myApp" , []);
app.controller("shashiCtr" , ["$http" , "$scope" , function($http , $scope){
   
    $http.get("https://api.github.com/users").then(function(item){
        $scope.players = item.data;
    })
}]);


