'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication /*, Reddit*/) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		//$scope.reddit = new Reddit();


		$scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

		$scope.loadMore = function() {
			var last = $scope.images[$scope.images.length - 1];
			for(var i = 1; i <= 8; i++) {
				$scope.images.push(last + i);
			}
		};
	}
]);

/*// Reddit constructor function to encapsulate HTTP and pagination logic
angular.factory('Reddit', function($http) {
	var Reddit = function() {
		this.items = [];
		this.busy = false;
		this.after = '';
	};

	Reddit.prototype.nextPage = function() {
		if (this.busy) return;
		this.busy = true;

		var url = 'http://api.reddit.com/hot?after=' + this.after + '&jsonp=JSON_CALLBACK';
		$http.jsonp(url).success(function(data) {
			var items = data.data.children;
			for (var i = 0; i < items.length; i++) {
				this.items.push(items[i].data);
			}
			this.after = 't3_' + this.items[this.items.length - 1].id;
			this.busy = false;
		}.bind(this));
	};

	return Reddit;
});*/
