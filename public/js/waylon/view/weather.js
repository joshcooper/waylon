var Notochord = Notochord || {};

Notochord.WeatherView = Backbone.View.extend({
    el: 'img',

    initialize: function(options) {
        this.options = options || {};
    },

    render: function() {
        var state = this.getState();

        this.$el.attr('src', state.src);
        this.$el.attr('alt', state.alt);
        this.$el.attr('title', state.title);
        return this;
    },

    getState: function() {
        var state = {};

        switch (parseInt(this.model.get('health'))) {
            case 100:
                state.src   = "/img/sun.png",
                state.alt   = "[sun]",
                state.title = "No recent builds failed";
                break;
            case 80:
                state.src   = "/img/cloud.png",
                state.alt   = "[cloud]",
                state.title = "1 of the last 5 builds failed";
                break;
            case 60:
            default:
                state.src   = "/img/umbrella.png",
                state.alt   = "[umbrella]",
                state.title = "2 or more of the last 5 builds failed";
                break;
        }
        return state;
    },
});
