var $ = require('jquery');
var Backbone = require('backbone');
var recipeListTemplate = require('../templates/Recipe-list.hbs');

var App = require('../app');

var RecipeList = Backbone.View.extend({
  el: $('main'),
  collection: App.Collections.recipe,

  render: function () {
    var _this = this;
    var recipeCollection = this.collection;

    recipeCollection.fetch().done(function (recipe) {
      _this.$el.html(recipeListTemplate(recipe));

      $('.graph input').knob({
		  	width: '50%',
		  	displayInput: true,
		  	max: 5,
		  	readOnly: true,
		  	fgColor:"black"
      })
    });
  }
});

module.exports = RecipeList;