<template>
  <ul class="list-group">
    <li v-for="story in store.stories"  class="list-group-item">
      {{ story.writer }} said "{{ story.plot }}"
      Story upvotes {{ story.upvotes }}.
    </li>
  </ul>
  // nested outlet
  <router-view></router-view>
  <a v-link="{ path: '/stories/famous' }">Trending stories</a>
</template>

<script>
export default {
  data () {
    return {
      // Bind directly to stories
      stories: store.stories
    }
  }
}
</script>
