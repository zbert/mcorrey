<template>
  <div class="case-study__design"
  v-bind:class="{'fade-in': isInView, 'case-study__design--multi': !singleImageUrl}"
  v-scrollwatch="sectionScrollWatch">
    <img v-if="singleImageUrl" :src="singleImageUrl">
    <img v-else v-for="imgUrl in imageOption.multi_image" :key="imgUrl" :src="imgUrl" />
  </div>
</template>

<script>
export default {
  props: ['imageOption'],
  data: () => ({
    isInView: false
  }),
  computed: {
    singleImageUrl () {
      return (this.imageOption.image_type === 'Single')
        ? this.imageOption.single_image
        : false
    }
  },
  methods: {
    sectionScrollWatch (message) {
      if (message.new === 'aboveMiddle') {
        this.isInView = true
      }
    }
  }
}
</script>
