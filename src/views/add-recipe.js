// var $ = require('jquery');
// var Backbone = require('backbone');
// var addRecipeTemplate = require('../templates/add-recipe.hbs');

// var App = require('../app');
// var Recipe = require('../models/recipe.js');

// var AddRecipe = Backbone.View.extend({
//   el: $('main'),
//   editMode: false,

//   render: function (recipeId) {
//     var _this = this;
//     this.editMode = !!recipeId;

//     if(!this.editMode) {
// 		_this.$el.html(addRecipeTemplate());
//     } else {
//     	var recipe = this.recipe = new Recipe({ id: recipeId });
//     	recipe.fetch().done(function (data) {
//     		var output = addRecipeTemplate(recipe.toJSON());
//     		_this.$el.html(output);
//     	});
//     }
//   },

//   events: {
//   	"submit form.create": "submitCreate"
//   },

//   submitCreate: function (e) {
//   	e.preventDefault();

//   	var formData = {
//   		name: $('form.create input[name="name"]').val(),
//   		ingredients: $('form.create input[name="ingredients"]').val(),
//   		directions: $('form.create input[name="directions"]').val(),
//   		cookingTime: $('form.create select[name="cooking-time"]').val(),
//   		difficulty: $('form.create input[name="difficulty"]').val(),
//       category: $('form.create select[name="protein"]').val(),
//       timestamp: Date.now()
//   	};

//   	if (!this.editMode) {
//   		if($(formData.name).val('Hamburgers')) {
//         formData.img = '../images/hamburger.jpg'
//           } else {
//         formData.img = 'http://lorempixel.com/300/300/food/'+ Math.floor((Math.random() * 10) + 1)
//       }
//   		App.Collections.recipe.create(formData, {
//   			success: function (recipe) {
//   				App.router.navigate('/recipeList', { trigger: true });
//   			}
//   		});
//   	} else {
//   		this.recipe.set(formData);
//   		this.recipe.save().done(function () {
//   			App.router.navigate('/recipeList', { trigger: true });
//   		});
//   	}

//   }
// });

// module.exports = AddRecipe;