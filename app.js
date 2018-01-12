var app = angular.module("myApp" , ["ngRoute"]);
app.controller("shashiCtr" ,["$scope" ,function($scope){
    $scope.users = [
        {
            name:"shashi",
            age:27,
            doj:new Date("01/31/1988"),
            salary:50000,
            designation:"nodejs developer"

         },
         {
            name:"raghu",
            age:21,
            doj:new Date("12/31/1990"),
            salary:10000,
            designation:"angularjs developer"

         },
         {
            name:"vinay",
            age:29,
            doj:new Date("06/14/1985"),
            salary:20000,
            designation:"java developer"

         }
         
]
}]);


app.filter("jspiderFilter" , function(){
    return function(input , option){
        if(isNaN(option) || option == ""){
           return input;
        }else {
        return input.slice(0 , option).toUpperCase();
        }
    }

});


app.config(["$routeProvider" , "$locationProvider" , function($routeProvider , $locationProvider){
    $routeProvider.when("/login" , {
        templateUrl : "views/login.html"
    }).when("/register" , {
        templateUrl : "views/register.html"
    }).otherwise({
        redirectTo:"/"
    });
}])



