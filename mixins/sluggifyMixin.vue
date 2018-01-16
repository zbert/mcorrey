<script>
export default {
  methods: {
    sluggify (words) {
      words
        .toLowerCase()
        .split(' ')
        .filter(a => a)
        .join('-')
    }
  }
}
</script>
