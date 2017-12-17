<template>
  <div>
    <h1 v-html="item.title"></h1>
    <h2 v-html="item.caption"></h2>
  </div>
</template>

<script>
export default {
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
