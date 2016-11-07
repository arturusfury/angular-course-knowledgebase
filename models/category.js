var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  title: {
    type: String,
    index, true,
    required: true
  }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

module.exports.getCategories = function(callback) {
  Category.find(callback);
}

module.exports.getCategoryById = function(id, callback) {
  Category.findById(id, callback);
}

module.exports.getArticlesCategories = function(category, callback) {
  var query = {category: category}
  Category.find(query, callback);
}
