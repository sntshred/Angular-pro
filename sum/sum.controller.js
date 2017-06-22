angular.module('myapp')
    .run(($rootScope)=>{
        $rootScope.rootscope = 39;
    })
    .controller('MySum',MySum);

MySum.$inject =['$http','$scope','$rootScope','$q','ermpservice'];
function MySum($http,$scope,$rootScope,$q,ermpservice){
    var vm = this;
    vm.cal = "3 "+$rootScope.rootscope;

    ermpservice.findemployeeById(result);

    function result(res){
        console.log(res);
        vm.Employees = res;
    }
vm.dosum= function(x){
      alert("Do the Sum "+parseInt(x));
       console.log("Do the Sum Directive "+parseInt(x*2));

}
vm.doubleage= function(x){
      alert("Double Age with Directive "+parseInt(x*2));
       console.log("Double Age with Directive "+parseInt(x*2));

}

//    (()=>{
//        debugger;
//         $http({
//             url:'http://localhost:50150/mul?a=2&b=90',
//             method:"GET"
//         }).then(
//         (resp)=>{
//             $scope.data = resp.data;
//         },
//         (error)=>{
//             console.log("error occured..!! $" , error);
//             $q.reject(error);
//         })
//     })();
}
