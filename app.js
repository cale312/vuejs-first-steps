var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    },
    methods: {

    },
    computed: {
        greet: function() {
            return 'Hello From app One'
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'
    },
    methods: {
        changeTitle: function() {
            one.title = "Title Changed"
        }
    },
    computed: {
        greet: function() {
            return 'Hello From app Two'
        }
    }
});

two.title = "Changed from outside";
