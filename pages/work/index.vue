<template>
  <main class="layout-work" id="vue-app">

    <div class="wrapper layout-work__body">

      <work-list :work-projects="workPages" ></work-list>

      <div class="layout-work__outro">
        <img :title="work.emoji.title" :src="work.emoji.image" class="layout-work__emoji">
        <a target="_blank" class="btn layout-work__behance-link" :href="work.behance.url">{{work.behance.label}}</a>
      </div>

      <div class="layout-corman__slogan">{{settings.slogan}}</div>
    </div>
  </main>
</template>


<script>
import {mapState, mapGetters} from 'vuex'
import WorkList from '@/components/WorkList.vue'

export default {
  components: {
    WorkList
  },
  computed: {
    ...mapState([
      'settings',
      'work',
      'workPages'
    ])
  }
}
</script>
