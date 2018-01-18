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
    })
    .when("/contact" , {
        templateUrl:"/views/contact.html"
    }).otherwise({
        redirectTo:"/login"
    });
}])

myApp.run(function($rootScope){
    $rootScope.message = "this is root scope";
})


myApp.controller("serviceCtr" , function($scope , $timeout , $interval){

$scope.sometext = "we are learning angularjs";
$timeout(function(){
$scope.sometext = "we are learning Nodejs";

},5000);


$scope.time = new Date().toLocaleTimeString();
$interval(function(){
    $scope.time = new Date().toLocaleTimeString();
},1000)
});


myApp.directive("jspiders" , function(){
    return {
        restrict:"A",
        templateUrl:"/views/register.html",
        link:function(scope , element){
            element.bind("mouseenter" , function(){
                console.log("touched");
            })
        }

    }
});

myApp.directive("qspiders" , function(){
    return {
        restrict:"A",
        templateUrl:"/views/register.html",
        link:function(scope , element){
            element.bind("mouseleave" , function(){
                console.log("leave");
            });
        }

    }
})