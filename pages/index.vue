<template>
  <main class="layout-corman">
    <div class="layout-corman__copy wrapper">
      <h1 ref="heading" class="titles__main titles__main--home" v-html="renderHeading"></h1>
    </div>

    <div ref="background" class="layout-corman__faded">
      <img class="layout-corman__faded-img" :src="site.backgroundImage">
    </div>
  </main>
</template>

<script>
import {mapState} from 'vuex'
import {TimelineLite} from 'gsap'

const breakIntoSpans = function (sentence) {
  return sentence.split(' ').map((word) => {
    return `<span class="fade-word">${word}</span> `
  })
}

export default {
  computed: {
    ...mapState([
      'home',
      'site'
    ]),
    renderHeading () {
      var formattedHtml = this.home.heading.reduce((accumulator, sentence, currIndex) => {
        let sentenceWithSpans = breakIntoSpans(sentence).join('')

        return (currIndex === this.home.heading.length - 1)
          ? accumulator + sentenceWithSpans
          : accumulator + sentenceWithSpans + '<br>'
      }, '')

      return formattedHtml
    }
  },
  mounted () {
    this.introAnimation()
  },
  methods: {
    introAnimation () {
      let {heading, background} = this.$refs
      let spanTagsNodes = [...heading.getElementsByTagName('span')]

      let tl = new TimelineLite()

      tl.fromTo(background, 1.5, {
        opacity: 0
      },
      {
        opacity: 0
      }).staggerFromTo(spanTagsNodes, 1.75, {
        opacity: 0,
        x: 75
      },
      {
        opacity: 1,
        x: 0,
        ease: 'Power3.easeOut'
      }, 0.2, '+=0.5')
    }
  }
}
</script>
