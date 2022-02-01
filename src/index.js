import * as Vue from 'vue/dist/vue.esm-bundler.js';

const app = Vue.createApp( {
  template: `
    <button v-on:click="increment()">Increment</button>
    <p>{{count}}</p>
    <div 
      v-for="number in numbers"
      v-bind:class="getClass(number)"
    >
    <!-- SPEC methods: section에 getClass()를 따로 정의하여 사용 -->
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
    getClass ( number ) {
      return this.isEven( number ) ? 'blue' : 'red';
    },
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
