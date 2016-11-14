<template>
  <div class="form-horizontal">
    <h3>{{ story.writer }} said "{{ story.plot }}"</h3>
    <input type="text" class="form-control" v-model="story.plot">
    <span class="label label-info">Story upvotes {{ story.upvotes }} </span>
  </div>
</template>

<script>
import {store} from '../store.js'

export default {
  ready () {
    this.story = store.stories.find(this.isTheOne)
  },
  data () {
    return {
      story: {}
    }
  },
  methods: {
    isTheOne (story) {
      return story.id === this.$route.params.storyId;
    },
  }
}
</script>
