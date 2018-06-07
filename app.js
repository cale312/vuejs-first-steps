Vue.component('greeting', {
    template: '<p>Hey I am {{ name }} . <button v-on:click="changeName">Change Name</p>',
    data: function() {
        return {
            name: 'Gor'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Cale'
        }
    }
});

new Vue({
    el: '#vue-app-one',
    data: {

    },
    methods: {

    },
    computed: {

    }
});

new Vue({
    el: '#vue-app-two',
    data: {

    },
    methods: {

    },
    computed: {

    }
});
