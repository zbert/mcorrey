<template>
  <footer class="site-footer">
    <ul class="social-links">
      <li v-for="social in settings.socialLinks" class="social-links__item">
        <a target="_blank"
          :title="'share on ' + social.icon"
          :class="'social-links__icon icon-'+ social.icon"
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
  }
}
</script>
