const app = Vue.createApp({
    //template:'<div>{{greeting}}</div>',
    data(){
        return {
            greeting: 'Sup, my dudes',
            name: 'John',
            lastName: 'Doe',
            email: 'John@doe.com',
            gender: 'female',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',

        }
    },
    methods:{
        GetUser(){
            console.log(this.name);
        }
    }
})

app.mount('#app');
