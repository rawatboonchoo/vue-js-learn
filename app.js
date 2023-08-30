// console.log('hello, vue')
var _strName    = 'Rawat Boonchoo'
var _strTitle   = 'The Final Empire'
var _intAge     = 35
var _intCount   = 0

const app = Vue.createApp({
    // data, functions
    //template: '<h2>i am the template</h2>'
    data() {
        return {
            show    : true,
            title   : _strTitle,
            author  : _strName,
            age     : _intAge,
            count   : _intCount
        }
    },
    methods: {
        chageTitle(msg){
            //console.log('you click me')
            this.title = msg
        },
        changCount(){
            this.count --
        },
        toggleShow(){
            // this.show = false
            this.show = !this.show
        },
    },
})
app.mount('#app')