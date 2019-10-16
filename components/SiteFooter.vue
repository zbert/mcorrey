<template>
  <footer class="site-footer">
    <ul class="social-links">
      <li class="social-links__item"
        v-for="social in settings.social_links" 
        :key="social.url">
        <a target="_blank"
          :title="'share on ' + social.social_icon"
          :class="[generateIconClass(social.social_icon)]"
          :href="social.url"></a>
      </li>
    </ul>
  </footer>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState([
      'settings'
    ])
  },
  methods: {
    generateIconClass (icon) {
      return 'social-links__icon icon-'+ icon.toLowerCase()
    }
  }
}
</script>
