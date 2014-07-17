//Backbone Collection
/*jslint nomen:true*/
/*global Backbone,Model,$,ListView,_*/
var AppView = Backbone.View.extend({
    el: '#appHolder',

    events: {
        'click #btnAdd': 'addListItem',
        'keydown #taskName': 'updateOnEnter'
    },

    addListItem: function () {
        "use strict";
        var $taskName = $('#taskName'),
            model = new Model(),
            listView = null;
        
        if (_.isEmpty($taskName.val())) {
            return;
        }
        
        model.set("taskName", $taskName.val());

        listView = new ListView({
            model: model
        });

        listView.render();

        $taskName.val("");
        $taskName.focus();
    },

    updateOnEnter: function (event) {
        "use strict";
        if (event.keyCode === 13 && !_.isEmpty($(event.target).val())) {
            $('#btnAdd').trigger("click");
        }

    },

    render: function () {
        "use strict";
        var html = $('#mytemplate').html();
        this.$el.append(html);
    }

});