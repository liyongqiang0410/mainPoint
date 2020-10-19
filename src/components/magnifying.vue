<template>
  <div>
    <magnifying :url='url' :type='type'></magnifying>
  </div>
</template>

<script>
import magnifying from 'zx-magnifie'
export default {
  components: {
    magnifying
  },
  props: {
    url: {
      type: String,
      default: '../assets/yuanboyuan.jpg'
    },
    type: {
      type: String,
      default: 'square'
    }
  }
}
</script>