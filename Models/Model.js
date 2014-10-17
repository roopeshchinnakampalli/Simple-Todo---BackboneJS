//Backbone Model
/*global Backbone*/
var TodoApp = TodoApp || {};
TodoApp.Model = Backbone.Model.extend({
    defaults: {
        taskName: ""
    }
});