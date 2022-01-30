import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

const Root = defineComponent({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
  },
});

const app = createApp(Root);
const vm = app.mount('#app');
