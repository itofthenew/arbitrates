<template>
  <div>
    <!-- <Header :logo='logoMsg' @transferUser="getUser"></Header> -->
    <h1> this is parent component</h1>
    <div>
      <span>接受子组件的数据：</span>
      <span>{{user}}</span>
    </div>
    <input type="text" v-model="num1"/>
    <input type="text" v-model="num2"/>
    <input type="text" v-model="total"/>
    <div>
      3333333333333333333333
      <!-- 来自Vuex的数据: {{author}} -->
    </div>
    --------------------------------
    <div>{{$store.state.num}}</div>
  </div>
</template>

<script>
  // import Header from './header'
  export default {
    name: 'ParentProps',
    data() {
      return {
        num1: 12,
        num2: 23,
        logoMsg: 'this is from parent!',
        user: '',
        now: ''
      }
    },
    computed: {
      total: function () {
        // return Number(this.num1) + Number(this.num2)
        return 1*this.num1 + 1*this.num2
      },

      // author() {
      //   return this.$store.state.author
      // }
    },
    methods: {
      getUser: function (msg) {
        this.user = msg
      }
    },
    components: {
      
    }
  }

</script>
