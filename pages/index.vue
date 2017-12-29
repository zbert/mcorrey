<template>
  <main class="layout-corman">
    <div class="layout-corman__copy wrapper">
      <h1 class="titles__main titles__main--home titles__main--center" v-html="renderHeading"></h1>
    </div>


    <div class="layout-corman__faded">
      <img class="layout-corman__faded-img" :src="site.backgroundImage">
    </div>
  </main>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState([
      'home',
      'site'
    ]),
    renderHeading () {
      var firstSentence = this.home.heading[0].split('').map((letter) => {
        return (letter !== ' ') ? `<span>${letter}</span>` : letter
      })

      return firstSentence.join('') + `<br><span>${this.home.heading[1]}</span>`
    }
  },
  mounted () {
    document.getElementsByTagName('body')[0].classList.add('page__home')

    window.setTimeout(() => {
      document.getElementsByTagName('body')[0].classList.add('fade-shit')
    }, 500)
  }
}
</script>
