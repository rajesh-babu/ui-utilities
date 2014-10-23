angular.module('bindApp',[])
	.controller('MainCtrl', [
		'$scope',
		function($scope){
			$scope.count1=0;
		 	$scope.add1 = function(){
			 $scope.count1+=1;
			};
			$scope.count2=0;
		 	$scope.add2 = function(){
			 $scope.count2+=1;
			};
		}])
	.directive('utilsKeypress', function () {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
				if(event.which === 13) {
					scope.$apply(function (){
						scope.$eval(attrs.ngClick);
					});

					event.preventDefault();
				}
			});
		};
	});