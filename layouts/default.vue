<template>
  <div>
    <navigation />
    <nuxt/>
    <site-footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  components: {
    Navigation,
    SiteFooter
  }
}
</script>
