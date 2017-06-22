 angular.module("myapp")
// .directive("empDetails", function ($interpolate) {
//     return {
//             restrict:'A',
//             transclude:true,
//             scope:{
//                 oempname:'@',
//                 oemp:'=',
//                 extSum:'&'
                                
//             },
//             templateUrl: "sum/directives/list.emp.html",
//             controller:function($scope,$element,$attrs){
//             //     var x =$interpolate($attrs.hello)($scope);
//             //     $scope.btnClick = function(){
//             //         alert("on each because of controller"+x);
//             //     }
//             //     $scope.open = function(){
//             //         alert('communication with directive only' + $scope.oempname);
//             //     }
//             // console.log("controller Time "+x);
//             this.selected="false";
//             this.toggleselect = function(){
//                 alert("heello cotr");
//                 this.selected=!this.selected;
//             }
//         },
//         controllerAs:"ctrl1",
//             compile: function(tElement,tArttribute){
//                 tElement.css("border","3px solid red")
//             console.log("Compile Time"+  tArttribute.hello);
//             return{
//                 pre: function(scope,iElement,iAttriburte,controller){
//                     console.log("Pre "+iAttriburte.hello);
//                 },
//                  post: function(scope,iElement,iAttriburte,controller){
//                     console.log("Post "+iAttriburte.hello);
//                     if(iAttriburte.hello === "santosh1" ){
//                         iElement.css("border","6px solid black")
//                     }
//                     iElement.on("click",scope.btnClick);
                    
                    
//                 }
//             }
//         },

        
//     }
// })

// .directive("empDetails1",()=>{
//         return  {
//             restrict:'EA',
//             scope:{
//                 oempname:'@',
//                 oemp:'=',
//                 clickdir:'&'
//             },
//             templateUrl: "sum/directives/list.emp.html",

// }})

// .directive("empDetails1",()=>{
//         return  {
//             restrict:'EA',
//             scope:{
//                 oempname:'@',
//                 oemp:'=',
//                 clickdir:'&'
//             },
//         controller:function($scope,$element,$attrs){
//             this.selected="false";
//             this.toggleselect = function(){
//                 alert("heello cotr");
//                 this.selected=!this.selected;
//             }
//         },
//         controllerAs:"ctrl1",
//             templateUrl: "sum/directives/list.emp.html",

// }})


.directive("empDe",()=>{
        return  {
            restrict:'EA',
            scope:{
                oempname:'@',
                oemp:'=',
                
            },
            templateUrl: "sum/directives/list.emp.html",
        controller:function(){
            this.selected="false";
            this.toggleselect = function(){
                alert("heello cotr");
                this.selected=!this.selected;
            }
            
        },
        bindToController:true,
        controllerAs:"ctrl1"

}})