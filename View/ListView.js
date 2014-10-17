//Backbone View	- Sub View
/*jslint nomen:true*/
/*global Backbone,$,_*/
var TodoApp = TodoApp || {};
TodoApp.ListView = Backbone.View.extend({
    
    tagName : 'li',
    
    events: {
        'click button': 'deleteItem'
    },

    deleteItem: function (event) {
        "use strict";
        $(event.currentTarget).attr("disabled", "true").closest("li").css("text-decoration", "line-through");
        
        //Destroy the model associated
        this.model.destroy();
        //clear the view from DOM
        this.remove();
    },

    render: function () {
        "use strict";
        var html = _.template("<%-taskName%> - <button>done</button>")(this.model.toJSON());
        this.$el.html(html);
        return this;
    }
    
});