<template>
  <div ref="cursor" class="fancy-cursor"></div>
</template>

<script>
const orbDelay = 100

export default {
  data: () => ({
    rAFTicker: false,
    orbEl: undefined
  }),
  mounted () {
    document.addEventListener('mousemove', this.requestTicker, false)

    this.orbEl = document.createElement('div')

    this.orbEl.setAttribute('class', 'fancy-cursor__orb')

    this.$refs.cursor.insertAdjacentElement('afterEnd', this.orbEl)
  },
  beforeDestroy () {
    document.removeEventListener('mousemove', this.requestTicker, false)
  },
  methods: {
    requestTicker () {
      if (!this.rAFTicker) {
        window.requestAnimationFrame(this.mousePosition.bind(this, event))

        this.rAFTicker = true
      }
    },
    mousePosition ({clientX, clientY}) {
      this.rAFTicker = false

      this.$refs.cursor.style.transform = `translate(-50%, -50%) translate(${clientX}px, ${clientY}px)`

      setTimeout(() => {
        this.orbEl.style.transform = `translate(-50%, -50%) translate(${clientX}px, ${clientY}px)`
      }, orbDelay)
    }
  }
}
</script>
