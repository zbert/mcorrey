<script>
  export default {
    methods: {
      convertArrayToContent (contentArray) {
        return contentArray.reduce((fullSentence, currentSentence, currentIndex, array) => {
          return (currentIndex === array.length - 1)
            ? fullSentence + `${currentSentence}`
            : fullSentence + `${currentSentence}<br>`
        }, '')
      }
    }
  }
</script>
