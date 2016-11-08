angular.module('kB')
  .controller('CategoriesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('/categories').success(function(data){
      $scope.categories = data;
    });
  }])

  .controller('CategoryDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/categories/' + $routeParams.id).success(function(data){
      $scope.category = data;
    });
  }])

  .controller('CategoryEditCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('/categories/edit/:id').success(function(data){
      $scope.categories = data;
    });
  }])
