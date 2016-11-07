var express = require('express');
var router = express.Router();

var Article = require('../models/article');

router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles) {
    if (err) {
      console.log(err);
    }
    res.json(articles);
  });
});

router.get('/:articleId', function(req, res, next) {
  Article.getArticleById(req.params.articleId, function(err, article) {
    if (err) {
      console.log(err);
    }
    res.json(article);
  });
});

router.get('/category/:categoryName', function(req, res, next) {
  Article.getArticlesbyCategory(req.params.categoryName, function(err, article) {
    if (err) {
      console.log(err);
    }
    res.json(article);
  });
});

module.exports = router;
