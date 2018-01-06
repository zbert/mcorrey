<template>
  <div>
    <navigation />
    <nuxt/>
    <site-footer />
    <fancy-cursor />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import FancyCursor from '@/components/FancyCursor.vue'

export default {
  components: {
    Navigation,
    SiteFooter,
    FancyCursor
  }
}
</script>
