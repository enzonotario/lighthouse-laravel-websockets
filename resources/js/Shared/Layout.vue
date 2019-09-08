<template>
  <div class="flex flex-col w-full max-w-xl mx-auto">
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  watch: {
    title(title) {
      this.updatePageTitle(title);
    },
  },
  mounted() {
    this.updatePageTitle(this.title);
  },
  methods: {
    updatePageTitle(title) {
      document.title = title ? `${title} | Lighthouse-LaravelWebsockets` : 'Lighthouse-LaravelWebsockets';
    },
  },
};
</script>

<style scoped></style>
