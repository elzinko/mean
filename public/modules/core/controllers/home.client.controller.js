'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication/*, Placehold*/) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		//$scope.placehold = new Placehold();
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

/*
// Placehold constructor function to encapsulate HTTP and pagination logic
angular.factory('Placehold', function() {
	var Placehold = function() {
		this.busy = false;
		this.images = [1, 2, 3, 4, 5, 6, 7, 8];
	};

	Placehold.prototype.nextPage = function() {
		if (this.busy) return;
		this.busy = true;

		var last = this.images[this.images.length - 1];
		for(var i = 1; i <= 8; i++) {
			this.images.push(last + i);
		}
		this.busy = false;
	};

	return Placehold;
});
*/

/*
// Reddit constructor function to encapsulate HTTP and pagination logic
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

/*
angular.module('core', []).service(
	'scrollAndResizeListener', function($window, $document, $timeout) {
		var id = 0,
			listeners = {},
			scrollTimeoutId,
			resizeTimeoutId;

		function invokeListeners() {
			var clientHeight = $document[0].documentElement.clientHeight,
				clientWidth = $document[0].documentElement.clientWidth;

			for (var key in listeners) {
				if (listeners.hasOwnProperty(key)) {
					listeners[key](clientHeight, clientWidth); // call listener with given arguments
				}
			}
		}


		$window.addEventListener('scroll', function() {
			// cancel previous timeout (simulates stop event)
			$timeout.cancel(scrollTimeoutId);

			// wait for 200ms and then invoke listeners (simulates stop event)
			scrollTimeoutId = $timeout(invokeListeners, 200);
		});


		$window.addEventListener('resize', function() {
			$timeout.cancel(resizeTimeoutId);
			resizeTimeoutId = $timeout(invokeListeners, 200);
		});


		return {
			bindListener: function(listener) {
				var index = ++id;

				listeners[id] = listener;

				return function() {
					delete listeners[index];
				};
			}
		};
	}
);

angular.module('core').directive(
	'imageLazySrc', function ($document, scrollAndResizeListener) {
		return {
			restrict: 'A',
			link: function ($scope, $element, $attributes) {
				var listenerRemover;

				function isInView(clientHeight, clientWidth) {
					// get element position
					var imageRect = $element[0].getBoundingClientRect();

					if (
						(imageRect.top >= 0 && imageRect.bottom <= clientHeight) && (imageRect.left >= 0 && imageRect.right <= clientWidth)
					) {
						$element[0].src = $attributes.imageLazySrc; // set src attribute on element (it will load image)

						// unbind event listeners when image src has been set
						listenerRemover();
					}
				}

				// bind listener
				listenerRemover = scrollAndResizeListener.bindListener(isInView);

				// unbind event listeners if element was destroyed
				// it happens when you change view, etc
				$element.on('$destroy', function () {
					listenerRemover();
				});


				// explicitly call scroll listener (because, some images are in viewport already and we haven't scrolled yet)
				isInView(
					$document[0].documentElement.clientHeight,
					$document[0].documentElement.clientWidth
				);
			}
		};
	}
);
*/
