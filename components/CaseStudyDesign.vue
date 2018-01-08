<template>
  <div class="case-study__design" v-bind:class="{'fade-in': isInView}">

  </div>
</template>

<script>
export default {
  props: ['imageOption'],
  data: () => ({
    isInView: false
  }),
  methods: {
    sectionScrollWatch (message) {
      if (message.new === 'belowMiddle') {
        this.isInView = true
      }
    }
  }
}
</script>
