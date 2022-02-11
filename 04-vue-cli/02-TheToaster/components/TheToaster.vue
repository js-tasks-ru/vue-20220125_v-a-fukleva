<template>
  <div class="toasts">
    <one-toast
      class='toast__success'
      v-for='toast in toasts'
      :type='toast.type'
      :text='toast.msg'>
    </one-toast>
  </div>
</template>

<script>
import OneToast from "./OneToast";

export default {
  name: 'TheToaster',
  data() {
    return {
      toasts: [],
    }
  },

  components: {OneToast},
  methods: {
    error(message) {
        this.toasts.push({
          type: 'error',
          msg: message,
        })
    },
    success(message) {
      this.toasts.push({
        type: 'success',
        msg: message,
      })
    },
    hideToast(ms) {
      setTimeout(() => this.toasts.shift(), ms)
    }
  },
  computed: {
    toastsLength() {
      return this.toasts.length
    }
  },
  watch: {
    toastsLength (val, oldVal) {
      oldVal < val ? this.hideToast(5000) : null;
    }
  }
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

</style>
