var $ = require('jquery');
var Backbone = require('backbone');
var signUpTemplate = require('../templates/signup.hbs');

var App = require('../app');
var User = require('../models/user.js');

var SignUp = Backbone.View.extend({
  el: $('main'),
  editMode: false,

  render: function (userId) {
    var _this = this;
    this.editMode = !!userId;

    if(!this.editMode) {
    _this.$el.html(signUpTemplate());
    } else {
      var user = this.user = new User({ id: userId });
      user.fetch().done(function (data) {
        var output = signUpTemplate(user.toJSON());
        _this.$el.html(output);
      });
    }
  },

  events: {
  	"submit form.userAdd": "submituserAdd"
  },

  submituserAdd: function (e) {
  	e.preventDefault();
  
    var formData2 = {
        firstName: $('form.userAdd input[name="first-name"]').val(),
        lastName: $('form.userAdd input[name="last-name"]').val(),
        email: $('form.userAdd input[name="email"]').val(),
        password: $('form.userAdd input[name="password"]').val(),
        confirm: $('form.userAdd input[name="confirm"]').val(),
        timestamp: Date.now()
    };

    $('.option1').hide();
    $('.option2').show();
  

    if (!this.editMode) {
      App.Collections.user.create(formData2, {
        success: function (user) {
          App.router.navigate('#', { trigger: true });
        }
      });
    } else {
      this.user.set(formData2);
      this.user.save().done(function () {
        App.router.navigate('#', { trigger: true });
      });
    }
  },

});

module.exports = SignUp;
