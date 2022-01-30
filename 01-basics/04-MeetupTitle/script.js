import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const Root = defineComponent({
  data(){
    return {
      meetupId : null,
      meetupTitle : null,
    }
  },
  watch: {
    meetupId(newValue) {
      fetchMeetupById(newValue)
        .then(response => this.meetupTitle = response.title)
      },
  }

})

const app = createApp(Root);
const vm = app.mount('#app');
