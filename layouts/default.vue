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
  transition: {
    css: false,
    beforeEnter: function (el) {
      console.log(el)
      // ...
    },
    // the done callback is optional when
    // used in combination with CSS
    enter: function (el, done) {
      console.log(el)
      // ...
      done()
    },

    // --------
    // LEAVING
    // --------

    beforeLeave: function (el) {
      console.log(el)
      // ...
    }
  },
  components: {
    Navigation,
    SiteFooter,
    FancyCursor
  }
}
</script>
