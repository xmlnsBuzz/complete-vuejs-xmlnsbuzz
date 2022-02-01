import * as Vue from 'vue/dist/vue.esm-bundler.js';

const app = Vue.createApp( {
  template: `
    <button v-on:click="increment()">Increment</button>
    <p>{{count}}</p>
    <input 
     type="checkbox"
     v-model="value" 
     value="a"
    />
    <!-- NOTE v-model을 사용하여 아래의 data() section의 value와 결함 -->
    <input 
     type="checkbox"
     v-model="value"
     value="b"
    />

    {{ value }}

    <div class="red">
      {{error}}
    </div>
    
    <div 
      v-for="number in numbers"
      v-bind:class="getClass(number)"
    >
      <div>
        {{number}} 
      </div>
    </div>
  `,

  data () {
    return {
      count: 0,
      value: ['a'],
      numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
    };
  },

  // SPEC v-model

  computed: {
    evenList () {
      return this.numbers.filter( num => this.isEven( num ) );
    },
    error(){
      if ( this.value.length < 5 ) {
        return 'Must be greater than 5.';
      } 
    }
  },

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
  },
} );

app.mount( '#app' );
