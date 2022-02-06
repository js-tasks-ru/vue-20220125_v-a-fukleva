import {defineComponent} from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import {fetchMeetupById} from './meetupService.js';
import MeetupView from "../06-MeetupView/MeetupView.js";

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },
  props: {
    meetupId: {
      type: Number,
    }
  },
  data() {
    return {
      meetup: null,
      meetupDataIsLoading: true,
    }
  },
  mounted() {
    this.getMeetupData();
  },
  watch: {
    meetupId: {
      handler() {
        this.getMeetupData();
      },
    },
  },
  methods: {
    getMeetupData() {

      this.meetupDataIsLoading = true;

      fetchMeetupById(this.meetupId)
        .then((meetup) => {
          this.meetup = meetup;
          this.meetupDataIsLoading = false;
        })
        .catch(error => {
          this.meetup = null;
          this.meetupDataIsLoading = false;
        });
    },
  },

template: `
    <div class="page-meetup">
      <meetup-view
        v-if="meetup && !meetupDataIsLoading"
        :meetup="meetup">
      </meetup-view>

      <ui-container
        v-if="meetupDataIsLoading">
        <ui-alert >Загрузка...</ui-alert>
      </ui-container>

      <ui-container
        v-else>
        <ui-alert>Test Error</ui-alert>
      </ui-container>
    </div>`,
})
;
