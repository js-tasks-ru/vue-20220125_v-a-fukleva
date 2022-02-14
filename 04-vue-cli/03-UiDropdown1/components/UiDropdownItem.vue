<template>
  <button
    class="dropdown__item" :class="{'dropdown__item_icon' : hasIcon }"
    role="option"
    type="button"
    @click="$emit('onClick')"
    >

      <ui-icon
        v-if="hasIcon && item.icon"
        :icon="item.icon"
        class="dropdown__icon"/>

    {{ item.text }}
  </button>
</template>

<script>
import UiIcon from './UiIcon';

export default {
  name: "UiDropdownItem",
  components: { UiIcon },
  props:{
    item: {
      type: Object,
      required: true,
    },
    hasIcon: {
      type: Boolean,
    },
  },
}
</script>

<style scoped>
.dropdown__item {
  padding: 8px 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  background-color: var(--white);
  box-shadow: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
  outline: none;
  text-decoration: none;
}

.dropdown__item:hover,
.dropdown__item:focus {
  background-color: var(--grey-light);
}

.dropdown__item.dropdown__item_icon {
  padding-left: 56px;
  position: relative;
}
</style>
