import * as Vue from 'vue/dist/vue.esm-bundler.js';

const app = Vue.createApp( {
  template: `
    <button v-on:click="increment()">Increment</button>
    <p>{{count}}</p>
    <input 
     v-bind:value="value" 
     v-on:input="input"
    />
    {{value}}
    <!-- SPEC v-bind:value="value"처럼 v-bind를 사용하여 data() section에 지정한 value: 'user'를 결합(binding)시킨다.  -->
    
    <div 
      v-for="number in numbers"
      v-bind:class="getClass(number)"
    >
      <div>
      {{number}} 
      
      
      </div>
    </div>

  `,
  /* NOTE increment()과 increment는 똑 같음. (괄호)를 생략할 수 있음 */
  data () {
    return {
      count: 0,
      value: 'user',
      numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
      error: ''
    };
  },

  // SPEC SFC - Single File Component
  // SPEC v-model
  // SPEC computed

  methods: {
    input ( $event ) {
      this.value = $event.target.value;
      if ( this.value.length < 5 ) {
        this.error = 'Must be greater than 5.'
      }
    },
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
