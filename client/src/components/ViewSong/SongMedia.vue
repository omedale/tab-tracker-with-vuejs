<template>
  <div class="youtube">
    <youtube
      :video-id="youtubeId"
      :player-width="1100"
      :player-height="600">
    </youtube>
  </div>
</template>

<script>

export default {
  props: [
    'youtubeId'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.youtube{
  padding-top: 10px;
}
</style>
