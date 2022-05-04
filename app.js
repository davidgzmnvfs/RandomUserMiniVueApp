const app = Vue.createApp({
    //template:'<div>{{greeting}}</div>',
    data(){
        return {
            greeting: 'Sup, my dudes',
            name: 'John',
            lastName: 'Doe',
            email: 'John@doe.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',

        }
    },
    methods:{
        async GetUser(){
            const res = await fetch('https://randomuser.me/api');
            const {results} = await res.json();

            this.greeting = "`Hello, I'm ${ results[1].cell }`",
            this.name = results[0].name.first,
            this.lastName = results[0].name.last, 
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }
    },
    mounted(){
        this.GetUser();
    }
})

app.mount('#app');
