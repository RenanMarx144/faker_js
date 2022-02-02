
new Vue({
  el: '#nav',
  data: {
    slideAnimation: '',
    home: 'http://localhost/faker_js/',
    produtos_link:'http://localhost/faker_js/produtos'
  },
  methods: {
    animar(){
      this.slideAnimation = 'sld'
    },
    close(){
      this.slideAnimation = ''
    }
  },
})


