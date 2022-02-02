<template name="component-name">
  <div id="ss1" class="container mt-5">
    <!-- JSX -->
    <div class="row p-5">
      <div class="col-12 mb-5">
        <select @change="tipoProduto" class="form-select">
          <option value="cam">Camisa</option>
          <option value="can">Canecas</option>
          <option value="cel">Capas de celulares</option>
        </select>
      </div>
      <hr />
      <div class="portal row">
        <div v-show="val_tipo == 'cam'" class="col-12">
          <div class="row">
            <div class="col-md-3 col-12 p-4 card">
              <img src="../assets/camisa.jpg" alt="" />
            </div>
            <div class="col-md-3 col-12 p-4 card">
              <img src="../assets/camisa.jpg" alt="" />
            </div>
            <div class="col-md-3 col-12 p-4 card">
              <img src="../assets/camisa.jpg" alt="" />
            </div>
            <div class="col-md-3 col-12 p-4 card">
              <img src="../assets/camisa.jpg" alt="" />
            </div>
          </div>
        </div>
        <div v-show="val_tipo == 'can'" class="col-12">
          <div class="row">
            <div class="col-md-3 col-12 p-4 card">
              <img src="../assets/caneca.jpg" alt="" />
            </div>
            <div class="col-md-3 col-12 p-4 card">
              <img src="../assets/caneca.jpg" alt="" />
            </div>
            <div class="col-md-3 col-12 p-4 card">
              <img src="../assets/caneca.jpg" alt="" />
            </div>
            <div class="col-md-3 col-12 p-4 card">
              <img src="../assets/caneca.jpg" alt="" />
            </div>
          </div>
        </div>
        <div v-show="val_tipo == 'cel'" class="col-12">
          <div class="row">
            <div class="col-md-3 col-12 p-4 card">
              <img src="../assets/capa.jpg" alt="" />
            </div>
            <div class="col-md-3 col-12 p-4 card">
              <img src="../assets/capa.jpg" alt="" />
            </div>
            <div class="col-md-3 col-12 p-4 card">
              <img src="../assets/capa.jpg" alt="" />
            </div>
            <div class="col-md-3 col-12 p-4 card">
              <img src="../assets/capa.jpg" alt="" />
            </div>
            <div class="col-md-3 col-12 p-4 card">
              <img src="../assets/capa.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// JS
export default {
  name: "Produtos",
  components: {},
  data() {
    return {
      val_tipo: "cam",
    };
  },
  methods: {
    tipoProduto(e) {
      this.val_tipo = e.target.value;
    },
  },
};
</script>
<style lang="less">
/* CSS */
#ss1 {
  background: #fff;
  img {
    width: 90%;
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none !important;
  }
  select{
    width: 40%;
    outline: none;
  }
  .portal{
    height: 370px;
    overflow-y: hidden;
    overflow: auto;
    &::-webkit-scrollbar{
        width: 8px;opacity: 0;        
    }    
    &::-webkit-scrollbar-thumb{
        transition: 0.4s all ease;
        border-radius: 30px;
        border: 2px solid #F4F4F4;
    }
    &:hover::-webkit-scrollbar-thumb{
        opacity: 1;
        background:#4c5667;
    }
  }
}
</style>