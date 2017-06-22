angular.module("myapp")

.service("ermpservice",["$http","$log",function($http,$log){
this.findemployeeById = function(cb)
{
$http({
    url:"http://localhost:50150/get/",
    method:"GET"
}).
then(function(resp){
    $log.log("then area");
    $log.log(resp.data);
    cb(resp.data);
},function(resp){
    $log.log("Error cocoured");
    
})

}

}])