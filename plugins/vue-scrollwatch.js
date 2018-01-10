import Vue from 'vue'

const VueScrollwatch = {}

VueScrollwatch.install = function (Vue, options) {
  Vue.directive('scrollwatch', {
    data: {
      sections: [],
      states: {
        aboveScreen: 'aboveScreen',
        aboveMiddle: 'aboveMiddle',
        belowMiddle: 'belowMiddle',
        belowScreen: 'belowScreen'
      }
    },
    inserted (element, { name, value, arg }) {
      const self = Vue.directive(name)

      if (self.data.sections.length === 0) {
        self.addScrollListeners()
      }

      self.data.sections.push({
        element,
        onStateChange: value,
        state: undefined,
        moduleName: arg
      })

      self.onScroll()
    },
    unbind (element, { name }) {
      const self = Vue.directive(name)

      self.removeFromSections(element)

      if (self.sections.length === 0) {
        self.removeScrollListeners()
      }
    },
    // TODO: Passive scroll listeners
    addScrollListeners () {
      window.addEventListener(
        'scroll',
        this.onScroll,
        this.supportsPassiveListening() ? { passive: true } : false
      )
    },
    removeScrollListeners () {
      window.removeEventListener(
        'scroll',
        this.onScroll
      )
    },
    supportsPassiveListening () {
      try {
        window.addEventListener(
          'test',
          null,
          Object.defineProperty({}, 'passive', { get: () => true })
        )
        return true
      } catch (ignore) {
        return false
      }
    },
    onScroll () {
      var self = Vue.directive('scrollwatch')

      self.data.sections.forEach(section => {
        const oldState = section.state
        section.state = self.getStateOf(section.element)

        if (section.state !== oldState) {
          section.onStateChange({
            old: oldState,
            new: section.state,
            moduleName: section.moduleName
          })
        }
      })
    },
    removeFromSections (element) {
      this.data.sections = this.data.sections.filter(this.notElement(element))
    },
    notElement: (element) => (section) => {
      return section.element !== element
    },
    getStateOf (element) {
      const elementY = this.getElementY(element)
      const windowTop = this.getWindowTop()
      const windowMiddle = this.getWindowMiddle()
      const windowBottom = this.getWindowBottom()

      if (elementY > windowBottom) {
        return this.data.states.belowScreen
      } else if (elementY > windowMiddle) {
        return this.data.states.belowMiddle
      } else if (elementY > windowTop) {
        return this.data.states.aboveMiddle
      } else {
        return this.data.states.aboveScreen
      }
    },
    getElementY (element) {
      return element.getBoundingClientRect().top + this.getWindowTop()
    },
    getWindowTop () {
      return window.pageYOffset
    },
    getWindowMiddle () {
      return this.getWindowTop() + (this.getWindowHeight() / 2)
    },
    getWindowBottom () {
      return this.getWindowTop() + this.getWindowHeight()
    },
    getWindowHeight () {
      return window.innerHeight
    }
  })
}

Vue.use(VueScrollwatch)
