<template>
  <ul class="list-group">
    <li v-for="story in stories"  class="list-group-item">
      <h3>{{ story.writer }} said "{{ story.plot }}"</h3>
      <button class="btn btn-default"
        v-link="{ name: 'edit', params: { storyId: story.id }}"
      >
        Edit
      </button>
      <span class="label label-info">Story upvotes {{ story.upvotes }}
      </span>
    </li>
  </ul>
</template>

<script>
import {store} from '../store.js'

export default {
  data () {
    return {
      stories: store.stories,
      local: 'data'
    }
  }
}
</script>
