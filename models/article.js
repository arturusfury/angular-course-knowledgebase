var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: {
    type: String,
    index: true,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  category: {
    type: String,
    index: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var Article = module.exports = mongoose.model('Article', articleSchema);

// Create
module.exports.createArticle = function(newArticle, callback) {
  newArticle.save(callback);
}

// Read
module.exports.getArticles = function(callback) {
  Article.find(callback);
}

module.exports.getArticleById = function(id, callback) {
  Article.findById(id, callback);
}

module.exports.getArticlesbyCategory = function(category, callback) {
  var query = {category: category}
  Article.find(query, callback);
}

// Update
module.exports.updateArticle = function(id, data, callback) {
  var title = data.title;
  var body = data.body;
  var category = data.category;

  var query = {_id: id};

  Article.findById(id, function (err, article) {
    if(!article) {
      return next(new Error ('Could not load article'));
    } else {
      article.title = title;
      article.body = body;
      article.category = category;

      article.save(callback);
    }
  })
}

// Destroy
module.exports.deleteArticle = function (id, callback) {
  Article.find({_id: id}).remove(callback);
}
