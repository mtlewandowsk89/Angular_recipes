var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "src/templates/home.html"
  })
  .when("/aboutUs", {
    templateUrl: "src/templates/about-us.html",
    controller: ""
  })
  .when("/cookware", {
    templateUrl: "src/templates/cookware.html",
    controller: "cookwareCtrl"
  })
  .when("/addRecipe", {
    templateUrl: "src/templates/add-recipe.html",
    controller: "addRecipeCtrl"
  })
  .when("/login", {
    templateUrl: "src/templates/login.html",
    controller: ""
  })
  .when("/login/signup", {
    templateUrl: "src/templates/signup.html",
    controller: ""
  })
  .when("/recipeList/:category?", {
    templateUrl: "src/templates/Recipe-list.html",
    controller: "recipeCtrl"
  })
  .otherwise({
    redirectTo: "/"
  });
});

app.service('recipes', function() {
    var recipes = [
      {id: 1, name: 'grilled tilapia', difficulty: 2, img: './images/tilapia.jpg', ingredients: 'tilapia, salt, pepper, butter', directions: 'cook the tilapia', cookingTime: '11-20', category: 'seafood'},
      {id: 2, name: 'chef salad', difficulty: 1, img: './images/chefSalad.jpg', ingredients: 'lettuce, tomato, onion, dressing, cheese', directions: 'throw all ingredients in a bowl, mix together, add dressing at the end, mix again', cookingTime: '0-10', category: 'vegetarian'},
      {id: 3, name: "Turkey burgers", ingredients: "1 lb ground turkey, 1 egg yolk, 2 tbsp barbecue sauce, 1 tbsp spicy brown mustard, 1 tsp worcestershire sauce, hamburger buns, choice of toppings", directions: "combine ground turkey, sauces, and egg yolk in mixing bowl. Mix until combined, do not over-mix. Form into patties approximately 1/2 inch think and 4 inches wide. Heat oiled skillet on medium high heat. Add turkey burgers and cook thoroughly until juices run clear. Put on buns and add choice of toppings.", cookingTime: "11-20", difficulty: 3, category: "other", img: "./images/turkeyB.jpg"},
      {id: 4, name: "Chicken tacos", ingredients: "3 chicken breasts, flour tortillas, 2 tbsp southwest seasoning, 2 tbsp oil, choice of taco toppings", directions: "heat oil over medium heat in skillet, chop chicken into bite size pieces, brown chicken in skillet with southwest seasoning until chicken is cooked thoroughly, heat tortillas, spoon chicken into warm tortillas, add toppings to taste", cookingTime: "21-30", difficulty: 2, category: "chicken", img: "./images/tacos.jpg"},
      {id: 5, name: "Korean BBQ", ingredients: "2 Lbs thin sliced beef, 1/4 cup soy sauce, 3 tbsp sugar, 1 tbsp minced garlic, 3 tbsp chopped green onions, 1/2 tbsp minced ginger, 1 tsp dried red pepper flakes, 2 cups cooked jasmine rice", directions: "Combine all ingredients and allow to marinate in refrigerator for several hours. Grill over medium heat until cooked thoroughly. Serve over rice", cookingTime: "41-50", difficulty: 5, category: "beef", img: "./images/koreanBBQ.jpg"},
      {id: 6, name: "Simple Spanish Rice", ingredients: "1 cup white parboiled rice, 2/3 cup picante sauce (medium), 2 cups water", directions: "heat 1 tbsp oil over medium high heat in skillet, brown the rice, add picante sauce and water, bring to boil, cover and reduce heat to simmer for 15 minutes or until water absorbs", cookingTime: "11-20", difficulty: 1, category: "vegetarian", img: "./images/spanishRice.jpg"},
      {id: 7, name: "Spaghetti Carbonara", ingredients: "5 strips of bacon, 2 tbsp minced garlic, 3 egg yolks, 1/2 onion (chopped fine), 1/8 cup olive oil, ground black pepper, 1 lb pasta, 1/4 cup finely grated parmesan cheese", directions: "Chop bacon and cook until crisp. Remove from skillet, leaving grease behind. Add garlic, onion, and black pepper to the skillet. Saute until onions are soft. Add oil and bacon back into the skillet. Boil pasta until al dente. Drain pasta and immediately put in warm skillet with other ingredients. Combine egg yolk with 1/4 cup hot water and pour over hot pasta. Use tongs to toss until egg mixture cooks onto pasta and bacon/onion mixture is distributed evenly. Add parmesan cheese and black pepper to taste. Serve immediately", cookingTime: "31-40", difficulty: 4, category: "other", img: "./images/spaghetti.jpg"},
      {id: 8, name: "Beef Enchiladas", ingredients: "1Lb ground beef, 2 cans enchilada sauce, 12 white corn tortillas, 1 cup mexican blend cheese, 1/4 cup finely chopped onion", directions: "Brown hamburger then add onion and 1/2 of cheese. Add 1/2 can of sauce. Cook for 5-10 minutes on medium low heat. Heat tortillas in microwave until warm and pliable. Spoon line of hamburger mixture into center of tortilla. Roll and place in baking dish with ends down. Repeat with rest of tortillas. Top with rest of enchilada sauce and cheese. Bake at 400 degrees covered for 40 mins, then uncovered for an additional 10 mins", cookingTime: "51-60", difficulty: 5, category: "beef", img: "./images/enchiladas.jpg"},
      {id: 9, name: "Shrimp teriyaki stir fry", ingredients: "1/2 lb deveined shrimp, 1/4 cup teriyaki sauce, frozen stir fry vegetable mix, 1/2 tsp minced ginger, 1 tsp minced garlic, 1 lb thin spaghetti pasta (cooked)", directions: "Cook shrimp in half of teriyaki sauce until thoroughly cooked. Remove from pan. Stir fry vegetables and the remaining teriyaki sauce. Add garlic and ginger and cook until vegetables soften. Add shrimp back in and toss with pasta and serve.", cookingTime: "21-30", difficulty: 3, category: "seafood", img: "./images/shrimp.jpg"},
    ];

    return recipes;
});

app.controller('myCtrl', function($scope, $location) {
  $('.search').submit(function(e) {
    e.preventDefault();
  });

  $scope.location = $location;
});

app.controller('addRecipeCtrl', function($scope, $location, recipes, $window) {
 $scope.recipe = {
      name: '',
      difficulty: '',
      ingredients: '',
      directions: '',
      cookingTime: '',
      category: '',
      img: './images/noImage.gif'
    };

    $scope.addRecipe = function(recipe) {
      recipes.push(recipe);
      $window.location.href = '#recipeList';
    };
});

app.controller('recipeCtrl', function($scope, $routeParams, $location, recipes) {
    $scope.category = ($routeParams.category);
    $scope.test = $scope.category;
    $scope.search = $scope.recipeSearch;
    $scope.recipes = recipes;
});

app.controller('cookwareCtrl', function($scope) {
  $scope.pic = 1;
});




