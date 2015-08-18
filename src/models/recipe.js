var Backbone = require('backbone');

var App = require('../app');

App.Models.Recipe = Backbone.Model.extend({
	url: function() {
		var base = App.Settings.apiRoot + '/recipes';
		if (this.isNew()) return base;
		return base + '/' + this.id
	}
});

module.exports = App.Models.Recipe