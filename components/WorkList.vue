<template>
<ul class="work-list">
  <li v-for="project in workProjects" :key="project.slug" class="work-list__project">

    <nuxt-link class="work-list__link btn-strikethrough btn-strikethrough--thick"
      :to="`/work/${project.slug}`">{{project.title}}</nuxt-link>
    <figure  :if="project.imageurl" class="work-list__figure">
      <img class="work-list__shot" :src="project.featured_image">
    </figure>
  </li>
</ul>
</template>

<script>
import sluggifyMixin from '@/mixins/sluggifyMixin.vue'

export default {
  mixins: [sluggifyMixin],
  props: ['workProjects']
}
</script>
