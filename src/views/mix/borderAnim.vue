<template>
  <div>
    <button class="btn">
      <div class="border">
        <div class="border_top"></div>
        <div class="border_right"></div>
        <div class="border_bottom"></div>
        <div class="border_left"></div>
      </div>
      <span>hover</span>
    </button>
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
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
$position: top, right, bottom, left;
$color: hsl(160, 100%, 31%);
$width: 0%;
$height: 0;
.btn {
  --height: 40;
  outline: none;
  height: calc(var(--height) * 1px);
  position: relative;
  padding: 12px 20px;
  border: 1px solid #dddddd20;
  .border {
    width: 100%;
    height: calc(var(--height) * 1px);
    position: absolute;
    left: 0;
    top: 0;
    .border_top,
    .border_right,
    .border_bottom,
    .border_left {
      transition: all 0.3s;
      position: absolute;
    }
    @each $posi in $position {
      .border_#{$posi} {
        background-color: $color;
        @if $posi == top {
          top: 0;
          left: 0;
          width: $width;
          height: 2px;
        } @else if $posi == right {
          top: 0;
          right: 0;
          width: 2px;
          height: $height * 1px;
        } @else if $posi == bottom {
          right: 0;
          bottom: 0;
          width: $width;
          height: 2px;
        } @else if $posi == left {
          left: 0;
          bottom: 0;
          width: 2px;
          height: $height * 1px;
        }
      }
    }
  }
}
.btn:hover {
  .border_top {
    width: 100%;
  }
  .border_right {
    height: 40px;
  }
  .border_bottom {
    width: 100%;
  }
  .border_left {
    height: 40px;
  }
}
</style>