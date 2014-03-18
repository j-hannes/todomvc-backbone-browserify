var Backbone = require('backbone')

var App = Backbone.Router.extend({
  start: function() {
    console.log('backbone app started')
  }
})

module.exports = new App()
