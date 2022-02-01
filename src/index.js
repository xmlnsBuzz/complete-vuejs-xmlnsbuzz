import * as Vue from 'vue/dist/vue.esm-bundler.js';

const app = Vue.createApp( {
  template: `
    <button v-on:click="increment()">Increment</button>
    <p>{{count}}</p>
    <input 
     v-bind:value="value" 
     v-on:input="input"
    />
    <div class="red">
      {{error}}
    </div>
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
      // error: '' // NOTE 이 곳을 지우지 않으면 위의 {{error}} 대신 '' 이 적용되므로 빈 문자열이 나타난다.
      // SPEC 아래의 computed section을 위로 올려도 마찬 가지다.
    };
  },

  // SPEC SFC - Single File Component
  // SPEC v-model
  // SPEC computed

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
    input ( $event ) {
      this.value = $event.target.value;
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


} );

app.mount( '#app' );
