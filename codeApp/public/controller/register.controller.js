angular.module("codeApp").controller("registerController", function($scope, $rootScope, UserService, $location){
    console.log("register controller is locked and loaded.");
    
    $scope.register = register;
    
    function register(){
        console.log("trying to register user " + $scope.user);
        // we will send the user as is in the json format to the user service    
        UserService.createUser($scope.user);
        $location.url("/home");
    }
    
    
});