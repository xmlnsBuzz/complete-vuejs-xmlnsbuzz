import * as Vue from 'vue/dist/vue.esm-bundler.js';

const app = Vue.createApp( {
  template: `
    <button v-on:click="increment()">Increment 1</button>
    <button v-on:click="increment">Increment 함수 뒤에 괄호 없어도 됨</button>
    
    <p>{{count}} </p>
  `,
  /* NOTE increment()과 increment는 똑 같음. (괄호)를 생략할 수 있음 */
  data () {
    return {
      count: 0
    };
  },

  methods: {
    increment () {
      this.count += 1;
    }
  }
} );
app.mount( '#app' );
