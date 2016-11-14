<template>
  <ul class="list-group">
    <li v-for="story in store.stories"  class="list-group-item">
      {{ story.writer }} said "{{ story.plot }}"
      Story upvotes {{ story.upvotes }}.
    </li>
  </ul>
</template>

<script>
  data () {
    return {
      // Bind directly to stories
      stories: store.stories,
    }
  }
</script>
