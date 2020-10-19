<template>
  <div class="pages">
    <waterMark textPosition="top-right" :textSize="80" color="#FF0000" :padding="40" userDefText="CANVAS 水印" />
  </div>
</template>
<script>
import waterMark from '@/components/imgWaterMark.vue'
export default {
  name: '',
  components: {
    waterMark
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.pages {
  background: linear-gradient(to top, #aa076b, #61045f);
}
</style>