<script setup lang="ts">
import type { Ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
const year: Ref<number> = ref(new Date().getFullYear());
</script>

<template>
  <footer>
    <div class="copyright text-center p-4">
      {{props.name}} &copy; {{year}}
    </div>
  </footer>
</template>
