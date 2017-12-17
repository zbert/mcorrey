<template>
  <div>
    <h1 v-html="item.title"></h1>
    <h2 v-html="item.caption"></h2>
  </div>
</template>

<script>
export default {
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
          { property: 'og:image', content: meta.image }
        ]
      }
    }

    return {}
  },
  data: () => ({
  }),
  computed: {
    item () {
      const slug = this.$route.params.slug
      return this.$store.getters.workPages[slug]
    }
  }
}
</script>
