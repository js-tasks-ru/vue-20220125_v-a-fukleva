import {defineComponent, createApp} from './vendor/vue.esm-browser.js';

const Root = defineComponent({
  data() {
    return {
      picked: null,
      operand1: 0,
      operand2: 0,
    }
  },
  computed: {

    calcResult() {
      switch (this.picked) {
        case 'sum':
          return this.operand1 + this.operand2;
        case 'subtract':
          return this.operand1 - this.operand2;
        case 'multiply':
          return this.operand1 * this.operand2;
        case 'divide':
          return this.operand1 / this.operand2;
        default:
          return 0;

      }
    }
  }
});

const app = createApp(Root);
const vm = app.mount('#app');
