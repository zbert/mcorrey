<template>
  <main class="layout-corman layout-corman--about">
    <div class="layout-corman__copy layout-corman__copy--two-column wrapper">

      <div class="titles__main titles__main--right-align" v-html="aboutContent"></div>
      <a target="_blank" class="btn-ghost layout-corman__resume" :href="about.resume.file">
        <span class="btn-ghost__label">{{about.resume.label}}</span>
      </a>
    </div>
    <div class="layout-corman__slogan">{{settings.slogan}}</div>
    <div class="layout-corman__faded">
      <img class="layout-corman__faded-img" :src="settings.site_background">
    </div>
  </main>
</template>


<script>
import {mapState} from 'vuex'
import contentHelpers from '@/mixins/contentHelpers.vue'
import metaMixin from '@/mixins/metaMixin.vue'

export default {
  mixins: [contentHelpers, metaMixin],
  computed: {
    ...mapState([
      'about',
      'settings'
    ]),
    aboutContent () {
      return this.convertArrayToContent(this.about.copy)
    }
  }
}
</script>
