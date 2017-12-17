import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      works: [
        {
          slug: 'rene',
          title: 'Rene',
          caption: 'Pitch Concept',
          role: 'art Director',
          year: '1890',
          agency: 'One North',
          images: []
        },
        {
          slug: 'ryan',
          title: 'Ryan',
          caption: 'Pjksjdl Concept',
          role: 'art Director',
          year: '1890',
          agency: 'One North',
          images: []
        }
      ]
    },
    getters: {
      workPages (state) {
        return state.works.reduce((workpages, work, index, works) => {
          workpages[work.slug] = work
          if (index + 1 < works.length) {
            workpages[work.slug].next = works[index + 1].slug
          }
          return workpages
        }, {})
      }
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore
