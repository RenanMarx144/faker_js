
<template name="component-name">
  <section id="ss1" class="container mt-5">
    <!-- JSX -->
    <div class="row mt-5">
      <div class="col-12 mt-5 p-5">
        <h1>Finalização de pedido</h1>
        <h4>Informações do Contato</h4>
      </div>
    </div>
    <div v-show="loading" class="loading">
      <img src="../assets/spinner.gif" alt="" />
    </div>
    <div>
      <form class="row">
        <div class="col-md-6 p-5 ">
          <fieldset class="form-group flex-warp">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" class="form-control" />
            <span v-if="span[1]">E-mail Invalido</span><br>
            <label for="tel">Telefone</label>
            <input type="tel" name="tel" id="tel" class="form-control" placeholder="exp: 11999999999" />
            <span v-if="span[2]">Telelfone Invalido</span><br>
          </fieldset>
          <fieldset class="form-group mt-5 flex-warp">
            <h3>Informações de Entrega</h3>
            <label for="cep">CEP</label>
            <div class="d-flex">
              <input type="text" name="cep" id="cep" class="form-control"  placeholder="exp: 0000000" />
              <button @click="consulta" class="btn btn-dark ms-1 px-5">
                <i class="fas fa-search"></i>
              </button>
            </div>
              <span v-if="span[4]">CEP Invalida</span><br>
            <label for="rua">Rua</label>
            <input type="text" name="rua" id="rua" class="form-control" />
            <span v-if="span[5]">Rua Invalida</span><br>
            <div class="d-flex">
              <div class="cidade">
                <label for="cidade">Cidade</label>
                <input
                  type="text"
                  name="cidade"
                  id="cidade"
                  class="form-control"
                /><span v-if="span[6]">Cidade Invalida</span><br>
              </div>
              
              <div class="bairro">
                <label for="bairro">Bairro</label>
                <input
                  type="text"
                  name="bairro"
                  id="bairro"
                  class="form-control"
                /><span v-if="span[9]">Bairro Invalida</span><br>
              </div>
              
            </div>
            <div class="d-flex">
              <div class="estado">
                <label for="estado">Estado</label>
                <input
                  type="text"
                  name="estado"
                  id="estado"
                  class="form-control"
                /><span v-if="span[7]">Estado Invalida</span><br>
              </div>
              
              <div class="numero">
                <label for="numero">Número</label>
                <input
                  type="text"
                  name="numero"
                  id="numero"
                  class="form-control"
                /><span v-if="span[8]">Número Invalida</span><br>
              </div>
              
            </div>
          </fieldset>
          <fieldset class="form-group mt-5 flex-warp">
            <label for="ncartao">Número do cartão</label>
            <input
              type="text"
              name="ncartao"
              id="ncartao"
              class="form-control"
               placeholder="exp: 4444555544447777"
            />
            <span v-if="span[0]">Numero do cartão errado</span><br>
            <label for="tcartao">Titular do Cartão</label>
            <input
              type="text"
              name="tcartao"
              id="tcartao"
              class="form-control"
            />
            <span v-if="span[10]">Titular do cartão Invalida</span><br>
            <div class="d-flex">
              <div class="estado">
                <label for="dtv">Data de vencimento</label>               
                <input type="text" name="dtv" id="dtv" class="form-control" placeholder="exp: 02/2025"/>
                <span v-if="span[3]">data Invalida Exemplo: 02/1995</span><br>
              </div>
              <div class="numero">
                <label for="cvc">CVC</label>
                <input type="text" name="cvc" id="cvc" class="form-control" />
                <span v-if="span[11]">CVC Invalida</span><br>
              </div>
            </div>
          </fieldset>
        </div>
        <div class="col-md-6 mt-5">
          <div class="row">
            <div class="col-md-6 col-12 thumbnail p-0">
              <img src="../assets/img1.jpg" alt="" />
            </div>
            <div class="col-md-6 col-12 content">
              <h1>Produto Lorem</h1>
              <p class="texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fugit nemo, assumenda inventore pariatur voluptas id!
                Consequuntur fugiat incidunt ad perferendis, expedita ex facilis
                at dolorum, ullam, doloremque id officiis!
              </p>
              <div class="d-flex align-items-center">
                <a @click="diminuir" class="btn-cont text-dark"
                  ><i class="fas fa-minus-square"></i
                ></a>
                <input
                  type="number"
                  min="1"
                  name=""
                  id=""
                  :value="qt"
                  class="inpt-qt"
                />
                <a @click="aumenta" class="btn-cont text-dark"
                  ><i class="fas fa-plus-square"></i
                ></a>
              </div>
              <small>R$ {{ preco }}</small>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12 mb-5 d-flex">
          <button
            @click="validacao"
            type="submit"
            class="ms-auto me-5 btn btn-dark"
          >
            Finalizar Pedido
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
// JS
import cep from "cep-promise";

export default {
  data() {
    return {
      name: 'Produto Lorem',
      qt: 1,
      preco: "19,90",
      result: 19.9,
      loading: false,
      span: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  },
  
  methods: {
    aumenta() {
      this.qt++;
      let sbt = this.preco.replace(",", ".");
      let fusion = parseFloat(sbt);
      let sresult = fusion + this.result;
      let tostring = `${sresult.toFixed(2)}`;
      this.preco = tostring.replace(".", ",");
    },
    diminuir() {
      this.qt--;
      if (this.qt > 0) {
        let sbt = this.preco.replace(",", ".");
        let fusion = parseFloat(sbt);
        let sresult = fusion - this.result;
        let tostring = `${sresult.toFixed(2)}`;
        this.preco = tostring.replace(".", ",");
      } else {
        this.qt++;
      }
    },
    loading_start() {
      var meuInterval = setInterval(() => {
        this.loading = true;
      }, 100);
      return meuInterval;
    },
    loging_stop(meuInterval) {
      clearInterval(meuInterval);
      this.loading = false;
    },
    consulta(e) {
      e.preventDefault();
      let val_cep = document.getElementById("cep").value;
      if (val_cep.length > 7 && parseInt(val_cep)) {
        let tt = this.loading_start();
        tt;
        setTimeout(() => {
          cep(val_cep)
            .then((result) => {
              this.loging_stop(tt);
              document.getElementById("rua").value = result.street;
              document.getElementById("cidade").value = result.city;
              document.getElementById("bairro").value = result.neighborhood;
              document.getElementById("estado").value = result.state;
            })
            .catch((error) => {
              console.log(error);
            });
        }, 1000);
      } else alert("cep invalido digite os 8 números corretamente");
    },
    testarPcC(nr, cartoes) {
      for (var cartao in cartoes) if (nr.match(cartoes[cartao])) return cartao;
      return false;
    },
    testCarto(ncartao) {
      var cartoes = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})/,
        Mastercard: /^5[1-5][0-9]{14}/,
        Amex: /^3[47][0-9]{13}/,
        DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
        JCB: /^(?:2131|1800|35\d{3})\d{11}/,
      };
      return this.testarPcC(ncartao, cartoes);
    },
    validacao(e) {
      e.preventDefault();

      let email = document.getElementById("email").value;
      let ncartao = document.getElementById("ncartao").value;
      let tel = document.getElementById("tel").value;
      let dtv = document.getElementById("dtv").value;
      let cep_c = document.getElementById("cep").value;
      let rua = document.getElementById("rua").value;
      let cidade = document.getElementById("cidade").value;
      let estado = document.getElementById("estado").value;
      let numero = document.getElementById("numero").value;
      let bairro = document.getElementById("bairro").value;
      let tcartao = document.getElementById("tcartao").value;
      let cvc = document.getElementById("cvc").value;
      // ------------------------------
      let re = /\S+@\S+\.\S+/;
      let rt = /^(\d{2})?(\d{9})$/;
      let rd = /^(\d{2})?\/?(\d{4})$/;
      let reE = new RegExp(re);
      let ret = new RegExp(rt);
      let reD = new RegExp(rd);

      // ------------------------------
      var test_total = true;
      var result_test = [];
      result_test[0] = this.testCarto(ncartao);
      result_test[1] = reE.test(email);
      result_test[2] = ret.test(tel);
      result_test[3] = reD.test(dtv);
      result_test[4] = cep_c.length > 7 ? true : false;
      result_test[5] = rua != "" ? true : false;
      result_test[6] = cidade != "" ? true : false;
      result_test[7] = estado != "" ? true : false;
      result_test[8] = numero != "" ? true : false;
      result_test[9] = bairro != "" ? true : false;
      result_test[10] = tcartao != "" ? true : false;
      result_test[11] = cvc != "" ? true : false;
      result_test.forEach((value, i) => {
        if (!value) {
          this.span[i] = true;
          test_total = false;
        } else {
          this.span[i] = false;
        }
      });
      if(test_total){
        var pedidoF = {
          nome: this.name,
          precoP: this.result,
          qt: this.qt,
          total: this.preco
        }
         this.$swal({
              title: 'Gostaria de finalizar o pagamento?',
              text: "Preço total R$ " + this.preco ,
              icon: 'info',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Sim'
            }).then((result) => {
              if (result.isConfirmed) {
                this.$swal({
                  icon: 'success',
                  title: 'Sucesso ...',
                  text: "Pagamento realizado com Sucesso!",
                })
                console.log(pedidoF)
              }
            })
        }else{           
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Cadastro incorreto',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          return
        }
            },
          },
        };
</script>
    

<style lang="less">
/* CSS */
#ss1 {
  background: #fff;
  form {
    #cep {
      width: 80%;
    }
    .cidade {
      width: 35%;
    }
    .bairro {
      width: 60%;
      margin-left: auto;
    }
    .estado {
      width: 75%;
    }
    .numero {
      width: 20%;
      margin-left: auto;
    }
    label {
      margin-top: 5px;
    }
    .btn-cont {
      font-size: 30px;
      text-decoration: none;
    }
    .inpt-qt {
      height: 25px;
      width: 20%;
      margin: 0 5px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 0;
      text-align: center;
    }
  }
}
.loading {
  width: 100%;
  height: 132%;
  position: absolute;
  top: 0%;
  display: flex;
  left: 0%;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  img {
    width: 10% !important;
  }
}
span{
  width: 100%;
  font-size: 14px;
  color: red;
  font-weight: bold;
  margin: 5px 0;
}
</style>