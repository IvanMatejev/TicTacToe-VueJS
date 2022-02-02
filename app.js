const app=Vue.createApp({
    data(){
        return{
            symbol: 'O'
        }
    },
    methods:{
        insertSymbol(event){
            if(this.symbol==='O'){
                this.symbol='X'
            }else{
                this.symbol='O'
            }
            event.target.innerHTML=this.symbol
        }
    }
});

app.mount('#main');