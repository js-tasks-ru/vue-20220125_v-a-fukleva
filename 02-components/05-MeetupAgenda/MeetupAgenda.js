import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',
  props: {
    agenda: {
      type: Array
    }
  },
  components: {
    MeetupAgendaItem,
  },

  template: `
    <ul class="agenda">
      <li class="agenda__item">
        <meetup-agenda-item v-for="agendaItem in agenda" :agendaItem="agendaItem"></meetup-agenda-item>
      </li>
    </ul>`,
});
