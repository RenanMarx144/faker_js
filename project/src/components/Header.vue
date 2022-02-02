<template>
    <!-- <router-link to="/about">About</router-link> | -->
  <header id="nav">
    <nav>
      <a @click="animar" class="btn-menu"><i class="fas fa-bars"></i></a>
    </nav>
    <div :class="slideAnimation" class="nav_bar">
      <div class="row">
        <div class="col-3 mg"></div>
        <div class="col-9 ct">
          <div class="d-flex t-menu">
            <h1>Menu</h1>
            <a @click="close" class="close"><i class="fas fa-times"></i></a>
          </div>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/imagens">Imagens</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data(){
    return{
      slideAnimation:''
    }    
  },
  methods: {
    animar(){
      this.slideAnimation = 'sld'
    },
    close(){
      this.slideAnimation = ''
    }
  },
};
</script>


<style lang="less">
header {
  width: 100vw;
  a {
    font-size: 18px;
    color: black;
    cursor: pointer;
    &:hover {
      text-decoration: none;
      color: black;
    }
  }
  nav {
    background: #fff;
    height: 50px;
    width: 100vw;
    padding: 0.7rem 1rem;
    z-index: 1;
  }
  .nav_bar {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: #fff;
    height: 60vh;
    width: 30%;
    display: none;
    .mg {
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      padding: 5px;
      height: 60vh;
    }
    .t-menu {
      width: 100%;
      align-items: center;
      justify-content: center;
      h1 {
        margin-left: 2rem;
      }
      a {
        font-size: 25px;
        margin-left: auto;
        margin-right: 1.2rem;
      }
    }
  }
  ul {
    list-style: none;
    a {
      text-decoration: none;
      font-weight: bold;
    }
  }
}
.sld {
  display: block !important;
  animation-name: slidein;
  animation-duration: 1s;
  transform: translateX(70vw);
}

@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(70vw);
  }
}
</style>