import * as Vue from 'vue/dist/vue.esm-bundler.js';

const app = Vue.createApp( {
  template: `
    <button v-on:click="increment()">Increment</button>
    <p>{{count}}</p>
    <div v-for="number in numbers">
      <div>
      {{number}} 
      <span v-if="isEven(number)">
        Even
      </span>
      <span v-else>
        Odd
      </span>
      
      </div>
    </div>

  `,
  /* NOTE increment()과 increment는 똑 같음. (괄호)를 생략할 수 있음 */
  data () {
    return {
      count: 0,
      numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    };
  },

  methods: {
    increment () {
      this.count += 1;
    },
    isEven (number) {
      return number % 2 === 0;
    }
    /* isEven ( val ) {
      return val % 2 === 0
    } */
  }
} );
app.mount( '#app' );
