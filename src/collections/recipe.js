var Backbone = require('backbone');

var App = require('../app');
var Recipe = require('../models/recipe');

var RecipeCollection = Backbone.Collection.extend({
	url: App.Settings.apiRoot + '/recipes',
	model: Recipe
});

App.Collections.recipe = new RecipeCollection;

module.exports = App.Collections.recipe;