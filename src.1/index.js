import * as Vue from 'vue/dist/vue.esm-bundler.js';

const Num = {
  props: [ 'number' ],
  template: `
  <button
    v-bind:class="getClass(number)"
    v-on:click="click"
  >
    {{ number }}
  </button>
`,

  methods: {
    click () {
      this.$emit('chosen', this.number)
    },
    // NOTE $emit을 사용하여 parent methods의 값을 자식에게 전달했다.
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
    <num 
      v-for="number in numbers"
      v-bind:number="number"
      v-on:chosen="addNumber"
    />
    <hr />
    <num 
      v-for="number in numberHistory"
      v-bind:number="number"
    />
  `,

  data () {
    return {
      numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
      numberHistory: []
    };
  },

  computed: {
    evenList () {
      return this.numbers.filter( num => this.isEven( num ) );
    },
  },

  methods: {
    addNumber ( number ) {
      // console.log('number', number)
      this.numberHistory.push(number)
    }
  },

} );

app.mount( '#app' );
