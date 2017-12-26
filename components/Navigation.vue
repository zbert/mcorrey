<template>
  <header class="site-header">
    <nuxt-link class="site-header__title" to="/">
      <span class="site-header__m">M</span><span class="site-header__mask">ichael.</span>
    </nuxt-link>

    <nav class="site-nav">
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

export default {
  computed: {
    ...mapState([
      'navigation'
    ])
  }
}
</script>
