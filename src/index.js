import * as Vue from 'vue/dist/vue.esm-bundler.js';

const app = Vue.createApp( {
  template: `
    <button v-on:click="increment()">Increment</button>
    <p>{{count}}</p>
    <div 
      v-for="number in numbers"
      v-bind:class="isEven(number) ? 'blue' : 'red'"
    >
    // SPEC v-bind with tenary operator
      <div>
      {{number}} 
      
      
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

  // SPEC SFC - Single File Component
  // SPEC v-model
  // SPEC computed

  methods: {
    increment () {
      this.count += 1;
    },
    isEven ( number ) {
      return number % 2 === 0;
    },
    /* isEven ( val ) {
      return val % 2 === 0
    } */
  },

  computed: {
    evenList () {
      return this.numbers.filter( num => this.isEven( num ) );
    }
  }

} );

app.mount( '#app' );
