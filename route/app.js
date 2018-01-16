const myApp = angular.module("routeApp" , ["ngRoute"]);
myApp.config(["$routeProvider" ,function($routeProvider){
    $routeProvider.when("/login" , {
        templateUrl:"/views/login.html"
    }).when("/register" , {
        templateUrl:"/views/register.html"
    }).when("/success" , {
        templateUrl:"/views/success.html"
    }).when("/home" , {
        templateUrl:"/views/home.html"
    }).otherwise({
        redirectTo:"/login"
    });
}])

myApp.run(function($rootScope){
    $rootScope.message = "this is root scope";
})


