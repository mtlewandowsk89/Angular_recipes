var Backbone = require('backbone');

var App = require('./app');
var recipeCollection = require('./collections/recipe');

var AboutUsView = require('./views/about-us');
App.Views.AboutUs = new AboutUsView;

var CookwareView = require('./views/cookware');
App.Views.Cookware = new CookwareView;

var HomeView = require('./views/home');
App.Views.Home = new HomeView;

var AddRecipeView = require('./views/add-recipe');
App.Views.AddRecipe = new AddRecipeView;

var RecipeListView = require('./views/recipe-list');
App.Views.RecipeList = new RecipeListView;

var LogInView = require('./views/login');
App.Views.LogIn = new LogInView;

var SignUpView = require('./views/signup');
App.Views.SignUp = new SignUpView;

App.Router = Backbone.Router.extend({

  routes: {
    '': 'home',
    'aboutUs': 'aboutUs',
    'cookware': 'cookware',
    'addRecipe': 'addRecipe',
    'recipeList/:id/edit': 'addRecipe',
    'recipeList/byCategory/:category': 'recipeByCategory',
    'recipeList(/:search)': 'recipeList',
    'login': 'login',
    'login/signup': 'signup',
    'recipeList/:id/delete': 'deleteRecipe',
    '*actions': 'defaultRoute'
  },

  home: function() {
    App.Views.Home.render();
  },

  cookware: function() {
    App.Views.Cookware.render();
  },

  addRecipe: function(id) {
    App.Views.AddRecipe.render(id);
  },

  deleteRecipe: function(id) {
    var recipe = recipeCollection.get(id);

    recipe.destroy().done(function (recipe) {
      App.router.navigate('/recipeList', {trigger: true})
    });
  },

  recipeList: function(searchTerm) {
    App.Views.RecipeList.render(searchTerm);
  },

  recipeByCategory: function(category) {
    App.Views.RecipeList.render(category, true);
  },

  login: function () {
    App.Views.LogIn.render();
  },

  signup: function () {
    App.Views.SignUp.render();
  },

  aboutUs: function() {
    App.Views.AboutUs.render()
  },

  defaultRoute: function(actions) {
    console.log('404');
  }
});

App.router = new App.Router;

Backbone.history.start();

$(function () {
  $(".search").on('submit', function (e) {
    e.preventDefault();
    var input = $('#search').val()
    App.router.navigate('/recipeList/' + input, ({ trigger: true }));
    $("#search").val('')
  })

  $(".logout").on('click', function (e) {
    e.preventDefault();
    App.router.navigate('#', { trigger: true });
    $('.option2').hide();
    $('.option1').show();
  })
      
})



