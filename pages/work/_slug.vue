<template>
<div class="layout-detail__container">
  <article class="layout-detail wrapper">
    <header class="case-study__header">
      <h1 class="case-study__title" v-text="item.title"></h1>
      <p class="case-study__caption" v-html="item.caption"></p>
    </header>

    <div class="case-study__meta">
      <p v-if="item.role" class="case-study__meta-item">
        <span class="case-study__meta-label" v-text="settings.case_study.role_label"></span>
        <span class="case-study__meta-content" v-text="item.role"></span>
      </p>
      <p v-if="item.year" class="case-study__meta-item">
        <span class="case-study__meta-label" v-text="settings.case_study.year_label"></span>
        <span class="case-study__meta-content" v-text="item.year">2017</span>
      </p>
      <p v-if="item.agency" class="case-study__meta-item">
        <span class="case-study__meta-label" v-text="settings.case_study.agency_label"></span>
        <span class="case-study__meta-content" v-text="item.agency"></span>
      </p>
      <p v-if="item.siteLink" class="case-study__meta-item case-study__meta-item--link">
        <a :href="item.siteLink" class="case-study__meta-link" v-text="settings.case_study.external_link_label"></a>
      </p>
    </div>

    <div v-if="item.images_list.length" class="case-study__screenshots">

      <case-study-design
        v-for="(design, index) in item.images_list" 
        :imageOption="design"
        :key="'key-' + index" />

      <img v-if="item.watermark" class="case-study__watermark" :src="item.watermark">
    </div>

  </article>
  <nuxt-link class="case-study__next" :to="nextLink">
    <span class="case-study__next-label" v-text="nextLabel"></span>
    <span class="case-study__next-arrow">
      <svg viewBox="0 0 142 129" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd" opacity=".426">
          <path stroke="#979797" d="M112.5 54.086v17.879H1.428V54.086z"/>
          <path d="M141.296 64.114L78.471.728l-8.954 9.978 52.085 52.086-53.918 53.917 10.768 10.81 62.844-63.405z" stroke="#979797"/>
          <path fill="#17191C" d="M125 54.586V71.33H77.68V54.586z"/>
        </g>
      </svg>
    </span>
  </nuxt-link>
</div>
</template>

<script>
import {mapState} from 'vuex'
import CaseStudyDesign from '@/components/CaseStudyDesign.vue'

export default {
  layout: 'white',
  head () {
    if (this.item) {
      const meta = this.item.meta
      return {
        title: 'Michael Correy',
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
  components: {
    CaseStudyDesign
  },
  data: () => ({
    slug: ''
  }),
  computed: {
    ...mapState([
      'settings'
    ]),
    item () {
      this.slug = this.$route.params.slug
      return this.$store.state.workPages[this.slug]
    },
    nextLink () {
      return '/work/' + this.item.next
    },
    nextLabel () {
      return this.$store.state.workPages[this.item.next].title
    }
  }
}
</script>
