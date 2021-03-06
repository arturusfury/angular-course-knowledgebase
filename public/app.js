var app = angular.module('kB', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/categories', {
      templateUrl: 'views/categories.view.html',
      controller: 'CategoriesCtrl'
    })

    .when('/category/details/:id', {
      templateUrl: 'views/category_details.view.html',
      controller: 'CategoryDetailsCtrl'
    })

    .when('/category/new', {
      templateUrl: 'views/add_category.view.html',
      controller: 'CategoryCreateCtrl'
    })

    .when('/category/edit/:id', {
      templateUrl: 'views/edit_categories.view.html',
      controller: 'CategoryEditCtrl'
    })

    // Articles

    .when('/articles', {
      templateUrl: 'views/articles.view.html',
      controller: 'ArticlesCtrl'
    })

    .when('/articles/details/:id', {
      templateUrl: 'views/article_details.view.html',
      controller: 'ArticleDetailsCtrl'
    })

    .when('/articles/category/:categoryName', {
      templateUrl: 'views/cat_articles.view.html',
      controller: 'ArticlesCategoryCtrl'
    })

    .when('/article/new', {
      templateUrl: 'views/add_article.view.html',
      controller: 'ArticleCreateCtrl'
    })

    .when('/article/edit/:id', {
      templateUrl: 'views/edit_article.view.html',
      controller: 'ArticleEditCtrl'
    })

    .otherwise({redirectTo: '/categories'});
}])
