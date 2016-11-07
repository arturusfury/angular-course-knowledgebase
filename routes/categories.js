var express = require('express');
var router = express.Router();

var Category = require('../models/category');

router.get('/', function(req, res, next) {
  Category.getCategories(function(err, categories) {
    if (err) {
      console.log(err);
    }
    res.json(categories);
  });
});

router.get('/:categoryId', function(req, res, next) {
  Category.getCategoryById(req.params.categoryId, function(err, category) {
    if (err) {
      console.log(err);
    }
    res.json(category);
  });
});

router.get('/:categoryName', function(req, res, next) {
  Category.getCategoryByName(req.params.categoryName, function(err, category) {
    if (err) {
      console.log(err);
    }
    res.json(category);
  });
});

router.get('/category/:categoryName', function(req, res, next) {
  Category.getCategoriesbyCategory(req.params.categoryName, function(err, category) {
    if (err) {
      console.log(err);
    }
    res.json(category);
  });
});

router.post('/', function(req, res, next) {
  var name = req.body.name;
  var description = req.body.description;

  var newCategory = new Category({
    name: name,
    description: description,
  });

  Category.createCategory(newCategory, function(err, category) {
    if (err) {
      console.log(err);
    }

    res.location('/categories');
    res.redirect('/categories');

  });
});

router.put('/', function(req, res, next) {
  var id = req.body.id;
  var data = {
    name: req.body.name,
    description: req.body.description,
  };

  Category.updateCategory(id, data, function(err, category) {
    if (err) {
      console.log(err);
    }

    res.location('/categories');
    res.redirect('/categories');
  });
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;

  Category.deleteCategory(id, function(err, category) {
    if (err) {
      console.log(err);
    }

    res.location('/categories');
    res.redirect('/categories')
  })
});

module.exports = router;
