<template>
  <div class="case-study__design"
  v-bind:class="{'fade-in': isInView, 'case-study__design--multi': !singleImageUrl}"
  v-scrollwatch="sectionScrollWatch">
    <img v-if="singleImageUrl" :src="singleImageUrl">
    <img v-else v-for="imgUrl in imageOption" :src="convertToUrl(imgUrl)" />
  </div>
</template>

<script>
export default {
  props: ['imageOption', 'slug'],
  data: () => ({
    isInView: false
  }),
  computed: {
    singleImageUrl () {
      return (typeof (this.imageOption) === 'string')
        ? this.convertToUrl(this.imageOption)
        : false
    }
  },
  methods: {
    sectionScrollWatch (message) {
      if (message.new === 'belowMiddle') {
        this.isInView = true
      }
    },
    convertToUrl (url) {
      return `/images/${this.slug}/${url}`
    }
  }
}
</script>
