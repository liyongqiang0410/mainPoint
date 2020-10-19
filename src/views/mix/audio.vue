<template>
  <div>
    <video ref="video" class="video" src="static/mp4/2b小姐姐尼尔.mp4" controls muted loop width="600">
      <track src="static/mp4/webVtt.vtt" kind="subtitles" label="中文字幕" srclang="zh" default>
    </video>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
    // 慢动作
    this.$refs.video.playbackRate = 1;
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
::cue {
  background-color: transparent;
  color: #ffffff;
  text-shadow: 0 1px #000, 1px 0 #000, -1px 0 #000, 0 -1px #000;
  font-size: medium;
}
</style>