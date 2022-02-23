<template>
  <div class="image-uploader">
    <label
      class="image-uploader__preview"
      :class="{'image-uploader__preview-loading' : loading}"
      :style="preview && { '--bg-url': `url('${preview}')` }"
    >

      <span class="image-uploader__text">
        {{ placeholder }}
      </span>
      <input
        ref="input"
        type="file"
        accept="image/*"
        class="image-uploader__input"
        v-bind="$attrs"
        @click="handleClick($event)"
        @change="handleChange()"
      />

    </label>
  </div>
</template>

<script>
export default {
  name: 'UiImageUploader',
  inheritAttrs: false,
  props: {
    preview: {
      type: String,
    },
    uploader: {
      type: Function,
    }
  },
  emits: ['select', 'remove', 'upload', 'error'],
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    placeholder() {
      if (this.loading) {
        return 'Загрузка...'
      } else {
        if (this.preview) {
          return "Удалить изображение"
        } else {
          return "Загрузить изображение"
        }
      }
    },
  },
  methods: {
    handleClick(event) {
      if(!this.loading) {
        this.$emit('remove');
        this.$refs.input.value = '';
      }

      if (this.preview) {
        event.preventDefault();
      }
    },
    handleChange() {
      const input = this.$refs.input;
      this.$emit('select', input.files[0]);

      if (this.uploader) {

        this.loading = true;
        this.uploader(input.files[0])
          .then(
            response => {
              this.$emit('upload', response)
              this.loading = false;
            },
            error => {
              this.$emit('error', error);
              input.value = '';
              this.loading = false;
            }
          )
      } else {
        this.$emit('upload', {
          image: URL.createObjectURL(input.files[0]),
        })
      }
    },
  }
};
</script>

<style scoped>
.image-uploader {
}

.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
