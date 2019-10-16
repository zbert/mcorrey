import Vuex from 'vuex'
import content from '@/static/content.json'
import settings from '@/static/_settings/index.json'
import homepage from '@/static/_pages/homepage.json'
import about from '@/static/_pages/about.json'
import contact from '@/static/_pages/contact.json'

import workLanding from '@/static/_pages/work.json'
import workPages from '@/static/_pages/workData.json'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ...content,
      settings,
      homepage,
      about,
      contact,
      navigation: {
        logo: 'Michael',
        labels: {
          work: 'Work',
          contact: 'Contact',
          about: 'About'
        }
      },
      workLanding,
      workPages
    }
  })
}

export default createStore
