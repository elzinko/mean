'use strict';


var myApp = angular.module('core');

/* OK 1 & 2
myApp.controller('HomeController', ['$scope', 'Authentication',
	function ($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

		$scope.loadMore = function () {
			var last = $scope.images[$scope.images.length - 1];
			for (var i = 1; i <= 8; i++) {
				$scope.images.push(last + i);
			}
		};
	}
]);
*/

/* OK 3 Reddit
myApp.controller('HomeController', ['$scope', 'Authentication', 'Reddit',
	function ($scope, Authentication, Reddit) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.reddit = new Reddit();
	}
]);

//Reddit constructor function to encapsulate HTTP and pagination logic
myApp.factory('Reddit', function ($http) {
	var Reddit = function () {
		this.items = [];
		this.busy = false;
		this.after = '';
	};

	Reddit.prototype.nextPage = function () {
		if (this.busy) return;
		this.busy = true;

		var url = 'http://api.reddit.com/hot?after=' + this.after + '&jsonp=JSON_CALLBACK';
		$http.jsonp(url).success(function (data) {
			var items = data.data.children;
			for (var i = 0; i < items.length; i++) {
				this.items.push(items[i].data);
			}
			this.after = 't3_' + this.items[this.items.length - 1].id;
			this.busy = false;
		}.bind(this));
	};

	return Reddit;
});
*/


/* OK 4 placehold
myApp.controller('HomeController', ['$scope', 'Authentication', 'Placehold',
	function ($scope, Authentication, Placehold) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.placehold = new Placehold();
	}
]);

myApp.factory('Placehold', function() {
	var Placehold = function() {
		this.busy = false;
		this.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	};

	Placehold.prototype.nextPage = function() {
		if (this.busy) return;
		this.busy = true;

		var last = this.images[this.images.length - 1];
		for(var i = 1; i <= 10; i++) {
			this.images.push(last + i);
		}
		this.busy = false;
	};

	return Placehold;
});*/

/* OK 5 ngInfiniteScroll + afkl-lazy-image + placehold.it
myApp.controller('HomeController', ['$scope', 'Authentication', 'Placehold',
	function ($scope, Authentication, Placehold) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.placehold = new Placehold();
	}
]);

myApp.factory('Placehold', function() {
	var Placehold = function() {
		this.busy = false;
		this.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	};

	Placehold.prototype.nextPage = function() {
		if (this.busy) return;
		this.busy = true;

		var last = this.images[this.images.length - 1];
		for(var i = 1; i <= 10; i++) {
			this.images.push(last + i);
		}
		this.busy = false;
	};

	return Placehold;
});
*/

/* OK 6 - 5 + bootstrap datas
myApp.controller('HomeController', ['$scope', 'Authentication', 'Placehold',
	function ($scope, Authentication, Placehold) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.placehold = new Placehold();
	}
]);

myApp.factory('Placehold', function () {
	var Placehold = function () {
		this.busy = false;
		this.images = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	};

	Placehold.prototype.nextPage = function () {
		if (this.busy) return;
		this.busy = true;

		var last = this.images[this.images.length - 1];
		for (var i = 1; i <= 9; i++) {
			this.images.push(last + i);
		}
		this.busy = false;
	};

	return Placehold;
});
*/

myApp.controller('HomeController', ['$scope', 'Authentication', 'Placehold',
	function ($scope, Authentication, Placehold) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.placehold = new Placehold();
	}
]);

myApp.factory('Placehold', function () {
	var Placehold = function () {
		this.busy = false;
		this.images = [];
	};

	Placehold.prototype.nextPage = function () {
		if (this.busy) return;
		this.busy = true;

		var last = this.images[this.images.length - 1];
		for (var i = 1; i <= 2; i++) {
			var height = ~~(Math.random() * 500) + 100;
			var id = ~~(Math.random() * 10000);
			this.images.push('http://lorempixel.com/g/280/' + height + '/?' + id);
		}
		this.busy = false;
	};

	return Placehold;
});
