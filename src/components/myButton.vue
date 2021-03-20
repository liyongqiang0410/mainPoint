<template>
  <el-button
    :class="anim ? 'myButton active' : border ? 'myButton' : ''"
    :size="size"
    :type="type"
    :plain="plain"
    :round="round"
    :icon="icon"
    :circle="circle"
  >
    <slot></slot>
  </el-button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: null,
    },
    anim: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "mini",
    },
    border: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
$textColor: #303133;
// 边框颜色
$staticColor: #dcdfe6 !default;
// 边框hover时颜色
$activeColor: #409eff;
// 边框宽
$borderWidth: 2px;

// 控制边框间隔
$startPos: 10px;
$endPos: 20px;
$bgSize: 0.12rem 1rem, 1rem 0.12rem;

$primary: #409eff;
$primaryHo: rgb(121, 187, 255);
$success: #67c23a;
$successHo: rgb(225, 243, 216);
$warning: #e6a23c;
$warningHo: rgb(250, 236, 216);
$danger: #f56c6c;
$dangerHo: rgb(253, 226, 226);
$info: #909399;
$infoHo: rgb(233, 233, 235);

@function changeColor($oldColor, $replaceColor) {
  $oldColor: $replaceColor;
  @return $oldColor;
}

@function reLinearGradient($staticColor) {
  $background-image: repeating-linear-gradient(
      0deg,
      $staticColor,
      $staticColor $startPos,
      transparent $startPos,
      transparent $endPos,
      $staticColor $endPos
    ),
    repeating-linear-gradient(
      90deg,
      $staticColor,
      $staticColor $startPos,
      transparent $startPos,
      transparent $endPos,
      $staticColor $endPos
    ),
    repeating-linear-gradient(
      180deg,
      $staticColor,
      $staticColor $startPos,
      transparent $startPos,
      transparent $endPos,
      $staticColor $endPos
    ),
    repeating-linear-gradient(
      270deg,
      $staticColor,
      $staticColor $startPos,
      transparent $startPos,
      transparent $endPos,
      $staticColor $endPos
    );
  @return $background-image;
}
.myButton[type="button"] {
  background-image: reLinearGradient($staticColor);
  background-size: $borderWidth calc(100% + 20px),
    calc(100% + 20px) $borderWidth, $borderWidth calc(100% + 20px),
    calc(100% + 20px) $borderWidth;
  background-position: 0 0, 0 0, 100% 0, 0 100%;
  background-repeat: no-repeat;
}
.myButton[type="button"]:hover {
  background-image: reLinearGradient($activeColor);
}

.myButton.el-button--myPrimary[type="button"] {
  background-image: reLinearGradient($primary);
  color: $textColor;
}
.myButton.el-button--myPrimary[type="button"]:hover {
  background-image: reLinearGradient($primaryHo);
  color: $textColor;
}
.myButton.el-button--mySuccess[type="button"] {
  background-image: reLinearGradient($success);
  color: $textColor;
}
.myButton.el-button--mySuccess[type="button"]:hover {
  background-image: reLinearGradient($successHo);
  color: $textColor;
}
.myButton.el-button--myWarning[type="button"] {
  background-image: reLinearGradient($warning);
  color: $textColor;
}
.myButton.el-button--myWarning[type="button"]:hover {
  background-image: reLinearGradient($warningHo);
  color: $textColor;
}
.myButton.el-button--myDanger[type="button"] {
  background-image: reLinearGradient($danger);
  color: $textColor;
}
.myButton.el-button--myDanger[type="button"]:hover {
  background-image: reLinearGradient($dangerHo);
  color: $textColor;
}
.myButton.el-button--myInfo[type="button"] {
  background-image: reLinearGradient($info);
  color: $textColor;
}
.myButton.el-button--myInfo[type="button"]:hover {
  background-image: reLinearGradient($infoHo);
  color: $textColor;
}

.myButton[type="button"].active {
  animation: borderAnimation 1s infinite linear;
}

@keyframes borderAnimation {
  from {
    background-position: 0 0, -20px 0, 100% -20px, 0 100%;
  }
  to {
    background-position: 0 -20px, 0 0, 100% 0, -20px 100%;
  }
}

@function changeBackground4($color) {
  $background: linear-gradient(to left, $color, $color) left top no-repeat,
    linear-gradient(to left, $color, $color) left bottom no-repeat,
    linear-gradient(to left, $color, $color) right top no-repeat,
    linear-gradient(to right, $color, $color) right top no-repeat,
    linear-gradient(to right, $color, $color) right bottom no-repeat,
    linear-gradient(to right, $color, $color) right bottom no-repeat,
    linear-gradient(to bottom, $color, $color) left bottom no-repeat,
    linear-gradient(to bottom, $color, $color) left top no-repeat,
    linear-gradient(to bottom, $color, $color) right top no-repeat;
  @return $background;
}
// 默认
.myButton[cornered4] {
  background: changeBackground4($staticColor);
  background-size: $bgSize;
}
.myButton[cornered4]:hover {
  $staticColor: changeColor($staticColor, $activeColor);
  background: changeBackground4($staticColor);
  background-size: $bgSize;
}
// 主要
.myButton.el-button--myPrimary[cornered4] {
  background: changeBackground4($primary);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--myPrimary[cornered4]:hover {
  $staticColor: changeColor($staticColor, $primaryHo);
  background: changeBackground4($staticColor);
  color: $textColor;
  background-size: $bgSize;
}
// 成功
.myButton.el-button--mySuccess[cornered4] {
  background: changeBackground4($success);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--mySuccess[cornered4]:hover {
  $staticColor: changeColor($staticColor, $successHo);
  background: changeBackground4($staticColor);
  color: $textColor;
  background-size: $bgSize;
}
//警告
.myButton.el-button--myWarning[cornered4] {
  background: changeBackground4($warning);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--myWarning[cornered4]:hover {
  $staticColor: changeColor($staticColor, $warningHo);
  background: changeBackground4($staticColor);
  color: $textColor;
  background-size: $bgSize;
}
// 错误
.myButton.el-button--myDanger[cornered4] {
  background: changeBackground4($danger);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--myDanger[cornered4]:hover {
  $staticColor: changeColor($staticColor, $dangerHo);
  background: changeBackground4($staticColor);
  color: $textColor;
  background-size: $bgSize;
}
// 信息
.myButton.el-button--myInfo[cornered4] {
  background: changeBackground4($info);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--myInfo[cornered4]:hover {
  $staticColor: changeColor($staticColor, $infoHo);
  background: changeBackground4($staticColor);
  color: $textColor;
  background-size: $bgSize;
}

@function changeBackground($color) {
  $background: linear-gradient(to left, $color, $color) left top no-repeat,
    linear-gradient(to bottom, $color, $color) left top no-repeat,
    linear-gradient(to left, $color, $color) right bottom no-repeat,
    linear-gradient(to left, $color, $color) right bottom no-repeat;
  @return $background;
}
// 默认
.myButton[cornered] {
  background: changeBackground($staticColor);
  background-size: $bgSize;
}
.myButton[cornered]:hover {
  $staticColor: changeColor($staticColor, $activeColor);
  background: changeBackground($staticColor);
  background-size: $bgSize;
}
// 主要
.myButton.el-button--myPrimary[cornered] {
  background: changeBackground($primary);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--myPrimary[cornered]:hover {
  $staticColor: changeColor($staticColor, $primaryHo);
  background: changeBackground($staticColor);
  color: $textColor;
  background-size: $bgSize;
}
// 成功
.myButton.el-button--mySuccess[cornered] {
  background: changeBackground($success);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--mySuccess[cornered]:hover {
  $staticColor: changeColor($staticColor, $successHo);
  background: changeBackground($staticColor);
  color: $textColor;
  background-size: $bgSize;
}
//警告
.myButton.el-button--myWarning[cornered] {
  background: changeBackground($warning);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--myWarning[cornered]:hover {
  $staticColor: changeColor($staticColor, $warningHo);
  background: changeBackground($staticColor);
  color: $textColor;
  background-size: $bgSize;
}
// 错误
.myButton.el-button--myDanger[cornered] {
  background: changeBackground($danger);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--myDanger[cornered]:hover {
  $staticColor: changeColor($staticColor, $dangerHo);
  background: changeBackground($staticColor);
  color: $textColor;
  background-size: $bgSize;
}
// 信息
.myButton.el-button--myInfo[cornered] {
  background: changeBackground($info);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--myInfo[cornered]:hover {
  $staticColor: changeColor($staticColor, $infoHo);
  background: changeBackground($staticColor);
  color: $textColor;
  background-size: $bgSize;
}

@function changeBackgroundR($color) {
  $background: linear-gradient(to right, $color, $color) right top no-repeat,
    linear-gradient(to bottom, $color, $color) right top no-repeat,
    linear-gradient(to left, $color, $color) left bottom no-repeat,
    linear-gradient(to left, $color, $color) left bottom no-repeat;
  @return $background;
}
.myButton[reverse] {
  background: changeBackgroundR($staticColor);
  background-size: $bgSize;
}
.myButton[reverse]:hover {
  $staticColor: changeColor($staticColor, $activeColor);
  background: changeBackgroundR($staticColor);
  background-size: $bgSize;
}
// 主要
.myButton.el-button--myPrimary[reverse] {
  background: changeBackgroundR($primary);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--myPrimary[reverse]:hover {
  $staticColor: changeColor($staticColor, $primaryHo);
  background: changeBackgroundR($staticColor);
  color: $textColor;
  background-size: $bgSize;
}
// 成功
.myButton.el-button--mySuccess[reverse] {
  background: changeBackgroundR($success);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--mySuccess[reverse]:hover {
  $staticColor: changeColor($staticColor, $successHo);
  background: changeBackgroundR($staticColor);
  color: $textColor;
  background-size: $bgSize;
}
//警告
.myButton.el-button--myWarning[reverse] {
  background: changeBackgroundR($warning);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--myWarning[reverse]:hover {
  $staticColor: changeColor($staticColor, $warningHo);
  background: changeBackgroundR($staticColor);
  color: $textColor;
  background-size: $bgSize;
}
// 错误
.myButton.el-button--myDanger[reverse] {
  background: changeBackgroundR($danger);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--myDanger[reverse]:hover {
  $staticColor: changeColor($staticColor, $dangerHo);
  background: changeBackgroundR($staticColor);
  color: $textColor;
  background-size: $bgSize;
}
// 信息
.myButton.el-button--myInfo[reverse] {
  background: changeBackgroundR($info);
  color: $textColor;
  background-size: $bgSize;
}
.myButton.el-button--myInfo[reverse]:hover {
  $staticColor: changeColor($staticColor, $infoHo);
  background: changeBackgroundR($staticColor);
  color: $textColor;
  background-size: $bgSize;
}

.el-button,
.el-button:hover {
  border: none;
}
</style>