import Vuex from 'vuex'
import content from '@/static/content.json'
import workLanding from '@/static/_pages/work.json'
import workPages from '@/static/_pages/workData.json'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ...content,
      workLanding,
      workPages
    }
  })
}

export default createStore
