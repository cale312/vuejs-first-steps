new Vue({
    el: '#vue-app',
    data: {
        output: 'Your fav anime'
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    },
    computed: {

    }
});
