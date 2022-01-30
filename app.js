  
  new Vue({
    el: '#app',
  data: {
    name: 'Renan'
  },
  methods: {
    atername(e){
       this.name = e.target.value
    },
    slectNome(e){
    this.name = e.target.value
  }
  },
  })
  