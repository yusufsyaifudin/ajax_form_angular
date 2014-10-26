/**
 * Angular js
 */


var app = angular.module('app', ['ngRoute']);

/**
 * Directives for ajax form
 * you can write your form like this:
 * <form ajax-form call-back="callbackFn" action="upload.php" method="post"> </form>
 *
 */
app.directive("ajaxForm", [function() {
	return {
		restrict: "A",
		scope: {
			"callBack": "="
		},
		link: function(scope, element, attrs) {
			//On click
			  $(element).ajaxForm(function(response) { 
				// console.log(response);
				scope.callBack(response);
			});
		}
	}
}]);


/**
 * Controller
 */
app.controller('MainController', function ($scope)
{
	$scope.callbackFn = function (response) {
		$scope.response = response;
		console.log(response)
		alert(JSON.stringify(response))
	}
});