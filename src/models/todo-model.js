// ----------------------------------------------------------------------------
// imports
//
var Backbone = require('backbone')


// ----------------------------------------------------------------------------
// TodoModel
//
var TodoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false,
  },
})


// ----------------------------------------------------------------------------
// exports
//
module.exports = TodoModel
