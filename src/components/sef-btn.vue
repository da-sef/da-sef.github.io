<template>
  <button class="make-a-gift">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.make-a-gift {
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 3px;
  background: var(--primary-swatch);
  padding: var(--space-0) var(--space-1);
}
</style>
