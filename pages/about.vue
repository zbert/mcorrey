<template>
  <main class="layout-corman">
    <div class="layout-corman__copy layout-corman__copy--two-column wrapper">

      <div class="titles__main titles__main--right-align" v-html="aboutContent"></div>
      <a target="_blank" class="btn-ghost layout-corman__resume" :href="about.resume.url">
        <span class="btn-ghost__label">{{about.resume.label}}</span>
      </a>
    </div>
    <div class="layout-corman__slogan">{{settings.slogan}}</div>
    <div class="layout-corman__faded">
      <img class="layout-corman__faded-img" :src="site.backgroundImage">
    </div>
  </main>
</template>


<script>
import {mapState} from 'vuex'
import contentHelpers from '@/mixins/contentHelpers.vue'

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
  mixins: [contentHelpers],
  computed: {
    ...mapState([
      'about',
      'settings',
      'site'
    ]),
    aboutContent () {
      return this.convertArrayToContent(this.about.intro)
    }
  }
}
</script>
