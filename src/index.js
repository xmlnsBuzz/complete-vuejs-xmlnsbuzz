import * as Vue from 'vue/dist/vue.esm-bundler.js';

const app = Vue.createApp( {
  template: `
    <button v-on:click="increment()">Increment</button>
    <p>{{count}}</p>
    <div v-if="isEven()">
      Even
    </div>
    <div v-else>
      Odd
    </div>
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
    },
    isEven () {
      return this.count % 2 === 0
    }
    /* isEven ( val ) {
      return val % 2 === 0
    } */
  }
} );
app.mount( '#app' );
