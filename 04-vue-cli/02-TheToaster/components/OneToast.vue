<template>
  <div class="toast" :class="[$options.toast[type].class]">
    <ui-icon class="toast__icon" :icon="$options.toast[type].icon" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon';

export default {
  name: "OneToast",
  components: { UiIcon },
  props: {
    type : {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: ''
    }
  },
  toast: {
    error : {
      class: 'toast_error',
      icon: 'alert-circle'
    },
    success : {
      class: 'toast_success',
      icon: 'check-circle'
    },
  }
}
</script>

<style scoped>

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
