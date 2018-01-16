<template>
  <div class="layout-detail--white">
    <navigation />
    <nuxt/>
    <fancy-cursor />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import FancyCursor from '@/components/FancyCursor.vue'

export default {
  components: {
    Navigation,
    FancyCursor
  }
}
</script>
