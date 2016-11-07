var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  description: {
    type: String
  }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// Create
module.exports.createCategory = function(category, callback) {
  category.save(callback);
}

// Read
module.exports.getCategories = function(callback) {
  Category.find(callback);
}

module.exports.getCategoryById = function(id, callback) {
  Category.findById(id, callback);
}

module.exports.getCategorysbyCategory = function(category, callback) {
  var query = {category: category}
  Category.find(query, callback);
}

// Update
module.exports.updateCategory = function(id, data, callback) {
  var name = data.name;
  var description = data.description;

  var query = {_id: id};

  Category.findById(id, function (err, category) {
    if(!category) {
      return next(new Error ('Could not load category'));
    } else {
      category.name = name;
      category.description = description;

      category.save(callback);
    }
  })
}

// Destroy
module.exports.deleteCategory = function (id, callback) {
  Category.find({_id: id}).remove(callback);
}
