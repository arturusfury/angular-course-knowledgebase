angular.module('kB')
  .controller('ArticlesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('/articles').success(function(data){
      $scope.articles = data;
    });
  }])

  .controller('ArticlesCategoryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/articles/category/' + $routeParams.categoryName).success(function(data){
      $scope.cat_articles = data;
      $scope.category = $routeParams.categoryName;
    });
  }])

  .controller('ArticleDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/articles/' + $routeParams.id).success(function(data){
      $scope.article = data;
    });

    $scope.removeArticle = function () {

    }
  }])

  .controller('ArticleCreateCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
    $http.get('/categories').success(function(data){
      $scope.categories = data;
    });

    $scope.addArticle = function() {
      var data = {
        title: $scope.title,
        body: $scope.body,
        category: $scope.category
      }

      $http.post('/articles', data).success(function(data, status){
        $location.path('#/articles/details/' + data.id);
      });
    }
  }])

  .controller('ArticleEditCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
    $http.get('/articles/' + $routeParams.id).success(function(data){
      $scope.article = data;
    });

    $http.get('/categories').success(function(data){
      $scope.categories = data;
    });

    $scope.editArticle = function() {
      var data = {
        id: $routeParams.id,
        title: $scope.article.title,
        body: $scope.article.body,
        category: $scope.article.category
      }

      $http.put('/articles', data).success(function(data, status){
        $location.path('/articles/' + $routeParams.id);
      });
    }
  }])
