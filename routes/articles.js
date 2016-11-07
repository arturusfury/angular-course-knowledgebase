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

router.post('/', function(req, res, next) {
  var title = req.body.title;
  var category = req.body.category;
  var body = req.body.body;

  var newArticle = new Article({
    title: title,
    category: category,
    body: body
  });

  Article.createArticle(newArticle, function(err, article) {
    if (err) {
      console.log(err);
    }

    res.location('/articles');
    res.redirect('/articles');

  });
});

router.put('/', function(req, res, next) {
  var id = req.body.id;
  var data = {
    title: req.body.title,
    category: req.body.category,
    body: req.body.body
  };

  Article.updateArticle(id, data, function(err, article) {
    if (err) {
      console.log(err);
    }

    res.location('/articles');
    res.redirect('/articles');
  });
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;

  Article.deleteArticle(id, function(err, article) {
    if (err) {
      console.log(err);
    }

    res.location('/articles');
    res.redirect('/articles')
  })
})

module.exports = router;
