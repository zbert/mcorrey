<template>
  <main class="layout-work" id="vue-app">

    <div class="wrapper layout-work__body">

      <work-list :work-projects="workPages" ></work-list>

      <div class="layout-work__outro">
        <img :title="workStatic.emoji.title" :src="workStatic.emoji.image" class="layout-work__emoji">
        <a target="_blank" class="btn layout-work__behance-link" :href="workLanding.behance.url">{{workLanding.behance.label}}</a>
      </div>

      <div class="layout-corman__slogan">{{settings.slogan}}</div>
    </div>
  </main>
</template>


<script>
import {mapState} from 'vuex'
import WorkList from '@/components/WorkList.vue'

export default {
  components: {
    WorkList
  },
  computed: {
    ...mapState([
      'settings',
      'workStatic',
      'workPages',
      'workLanding'
    ])
  }
}
</script>
