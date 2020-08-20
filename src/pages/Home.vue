<template>
  <div >
    <div class="container">
      <ListVideoComponent/>
    </div>
  </div>
</template>

<script>
import ListVideoComponent from '../components/videos/list'
export default {
  name: 'IndexPage',

  components: {
    ListVideoComponent
  },

  data () {
    return {
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>
