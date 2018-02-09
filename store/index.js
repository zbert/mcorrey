import Vuex from 'vuex'
import content from '@/static/content.json'

const sluggify = (words) =>
  words
    .toLowerCase()
    .split(' ')
    .filter(a => a)
    .join('-')

const createStore = () => {
  return new Vuex.Store({
    state: {
      ...content
    },
    getters: {
      // ...mapGetters([
      //   'navigation'
      // ]),
      workPages (state) {
        return state.work.pages.reduce((workpages, work, index, works) => {
          const slug = sluggify(work.title)
          // Getting work item
          workpages[slug] = {
            ...work,
            slug,
            featuredImage: `/images/${slug}/${work.featuredImage}`
          }
          // getting next page
          if (index + 1 < works.length) {
            workpages[slug].next = sluggify(works[index + 1].title)
          } else {
            workpages[slug].next = sluggify(works[0].title)
          }
          // get meta info
          workpages[slug].meta = {
            title: work.title,
            description: work.caption,
            image: work.featuredImage
          }
          return workpages
        }, {})
      }
    }
  })
}

export default createStore
