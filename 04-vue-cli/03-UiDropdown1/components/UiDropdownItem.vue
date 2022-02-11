<template>
  <button
    class="dropdown__item" :class="{'dropdown__item_icon' : hasIcon }"
    role="option"
    type="button"
    @click="update(item.value)"
    >

      <ui-icon
        v-if="hasIcon"
        :icon="setIcon"
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
    modelValue: {type: String},
  },
  emits: ['update:modelValue'],
  methods : {
    update(value) {
      this.$emit('update:modelValue', value)
    }
  },
  computed: {
    setIcon(){
      return this.item.icon ? this.item.icon : 'tv'
    }
  }

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
