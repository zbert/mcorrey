<template>
  <header class="site-header">
    <nuxt-link class="site-header__title" to="/">
      <span class="site-header__m">M</span><span class="site-header__mask">ichael.</span>
    </nuxt-link>

    <nav ref="nav" class="site-nav">
      <nuxt-link class="site-nav__link site-nav__link--top" to="/work">
         <span class="site-nav__title" v-text="navigation.labels.work"></span>
      </nuxt-link>
      <nuxt-link class="site-nav__link site-nav__link--right" to="/about">
         <span class="site-nav__title" v-text="navigation.labels.about"></span>
      </nuxt-link>
      <nuxt-link class="site-nav__link site-nav__link--left" to="/contact">
         <span class="site-nav__title" v-text="navigation.labels.contact"></span>
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
import {mapState} from 'vuex'
import {TimelineLite} from 'gsap'

export default {
  computed: {
    ...mapState([
      'navigation'
    ])
  },
  mounted () {
    const slug = this.$route.path

    if (slug === '/') this.beginHomeAnimation()
  },
  methods: {
    beginHomeAnimation () {
      let {nav} = this.$refs
      let navNodes = [...nav.getElementsByTagName('a')]
      const footerLinks = [...document.querySelector('.site-footer').getElementsByTagName('li')]

      let tl = new TimelineLite()

      tl.staggerFromTo(navNodes, 1, {
        opacity: 0
      },
      {
        opacity: 1,
        delay: 0.5
      }, 0.5).staggerFromTo(footerLinks, 0.5, {
        opacity: 0,
        x: 20
      },
      {
        opacity: 1,
        x: 0
      }, 0.1)
    }
  }
}
</script>
