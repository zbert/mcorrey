<script>
import {mapState} from 'vuex'

export default {
  computed: {
    item () {
      const pageName = this.$route.name
      return this.$store.state[pageName]
    }
  },
  head () {
    if (this.item) {
      const meta = this.item.meta
      return {
        title: meta.title,
        meta: [
          { name: 'description', content: meta.description },
          { property: 'og:description', content: meta.description },
          { property: 'og:title', content: meta.title },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: this.$route.fullPath },
          { property: 'og:image', content: this.$store.state.settings.site_background }
        ]
      }
    }
  }
}
</script>
