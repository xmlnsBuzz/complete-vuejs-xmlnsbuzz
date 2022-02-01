import * as Vue from 'vue/dist/vue.esm-bundler.js';

const Num = {
  props: [ 'number' ],
  template: `
  <div
    v-bind:class="getClass(number)"
  >
    {{ number }}
  </div>
`,
  /* NOTE component를 reuse하기 위해서는 methods를 component 내부에 놓아야 된다.
  아래의 getClass, isEven을 최상위 methods에서 Num component 내부로 옮겼다. */
  methods: {
    getClass ( number ) {
      return this.isEven( number ) ? 'blue' : 'red';
    },
    isEven ( number ) {
      return number % 2 === 0;
    },
  },
};


const app = Vue.createApp( {
  components: {
    Num
  },

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
      {{ error }}
    </div>
    
    <div 
      v-for="number in numbers"
    >
      <num v-bind:number="number" />
    </div>
  `,

  data () {
    return {
      count: 0,
      value: [ 'a' ],
      numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
    };
  },

  // SPEC v-model

  computed: {
    evenList () {
      return this.numbers.filter( num => this.isEven( num ) );
    },
    error () {
      if ( this.value.length < 5 ) {
        return 'Must be greater than 5.';
      }
    }
  },

  methods: {
    increment () {
      this.count += 1;
    },
  },

} );

app.mount( '#app' );
