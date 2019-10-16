<template>
  <main class="layout-corman">
    <div class="layout-corman__copy wrapper">
      <div class="titles__main titles__main--white">
        <a class="btn-strikethrough"
          :href="`mailto:${contact.email}`">{{contact.email}}</a><br>

        <a :href="`tel:${contact.phone}`">{{contact.phone}}</a>
      </div>

      <div class="titles__main">
        <address v-html="addressInfo">
        </address>
      </div>
    </div>
    <div class="layout-corman__slogan">{{settings.slogan}}</div>
    <div class="layout-corman__faded">
      <img class="layout-corman__faded-img" :src="settings.site_background">
    </div>
  </main>
</template>

<script>
import {mapState} from 'vuex'
import contentHelpers from '@/mixins/contentHelpers.vue'
import metaMixin from '@/mixins/metaMixin.vue'

export default {
  mixins: [contentHelpers, metaMixin],
  computed: {
    ...mapState([
      'contact',
      'settings'
    ]),
    addressInfo () {
      return this.convertArrayToContent(this.contact.address)
    }
  }
}
</script>
