new Vue({
    el: '#vue-app',
    data: {
        name: "Cale",
        job: "Assasin",
        website: "http://aliens.ufo",
        websiteTag: '<a href="http://aliens.ufo">web<a>',
        age: 22,
        x: 0,
        y: 0,
        newName: '',
        newAge: '',
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        ets: ['Pleer', 'Cale', 'Gor'],
        aliens: [
            { name: 'Pleer', age: 102 },
            { name: 'Cale', age: 104 },
            { name: 'Gor', age: 99 }
        ]
    },
    methods: {
        greet: function(time) {
            return `Good ${time} ${this.name}`;
        },
        add: function(inc) {
            this.age+=inc;
        },
        subtract: function(dec) {
            this.age-=dec;
        },
        updateXY: function(evt) {
            this.x = evt.offsetX;
            this.y = evt.offsetY;
        },
        click: function() {
            alert("you clicked me!")
        },
        logName: function() {
            console.log('name');
            console.log('You entered your name');
        },
        logAge: function() {
            console.log('age');
            console.log('You entered your age');
        }
    },
    computed: {
        addToA: function() {
            console.log('a');
            return this.a + this.age;
        },
        addToB: function() {
            console.log('b');
            return this.b + this.age;
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});
