import {defineComponent} from './vendor/vue.esm-browser.js';
import {agendaItemIcons, agendaItemDefaultTitles} from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  props: {
    agendaItem: {
      type: Object,
    }
  },
  data() {
    return {
      agendaItemDefaultTitles,
      agendaItemIcons,
    }
  },
  computed: {
    iconSrc () {
      return `/assets/icons/icon-${agendaItemIcons[this.agendaItem.type]}.svg`
    },
  },

  template: `
    <div class="agenda-item">
    <div class="agenda-item__col">
      <img
        :src="this.iconSrc"
        class="icon"
        alt="key"/>
    </div>
    <div class="agenda-item__col">
      {{ agendaItem.startsAt + ' - ' + agendaItem.endsAt }}
    </div>
    <div class="agenda-item__col">

      <h3 class="agenda-item__title">
        {{ agendaItem.title? agendaItem.title : agendaItemDefaultTitles[agendaItem.type] }}
      </h3>

      <p
        class="agenda-item__talk"
        v-if="agendaItem.type === 'talk'">

        <span>{{ agendaItem.speaker }}</span>
        <span class="agenda-item__dot"></span>
        <span
          class="agenda-item__lang"
          v-if="agendaItem.type === 'talk'">
          {{ agendaItem.language }}
        </span>

      </p>

      <p>{{ agendaItem.description }}</p>
    </div>
    </div>`,
});
