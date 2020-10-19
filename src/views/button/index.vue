<template>
  <div class="myButton">
    <div class="item">
      <h4 class="title">虚线边框</h4>
      <div class="item">
        <h5 class="title">静态态</h5>
        <my-button border size="medium">按钮</my-button>
        <my-button border type="myPrimary" size="small">按钮</my-button>
        <my-button border type="mySuccess" size="mini">按钮</my-button>
        <my-button border type="myWarning" size="medium">按钮</my-button>
        <my-button border type="myDanger" size="small">按钮</my-button>
        <my-button border type="myInfo" size="mini">按钮</my-button>
      </div>
      <div class="item">
        <h5 class="title">动态</h5>
        <my-button :anim='true' size="medium">按钮</my-button>
        <my-button :anim='true' type="myPrimary" size="small">按钮</my-button>
        <my-button :anim='true' type="mySuccess" size="mini">按钮</my-button>
        <my-button :anim='true' type="myWarning" size="medium">按钮</my-button>
        <my-button :anim='true' type="myDanger" size="small">按钮</my-button>
        <my-button :anim='true' type="myInfo" size="mini">按钮</my-button>
      </div>
      <div class="item">
        <h5 class="title">对角</h5>
        <my-button border cornered>按钮</my-button>
        <my-button border cornered type="myPrimary" size="medium">按钮</my-button>
        <my-button border cornered type="mySuccess" size="small">按钮</my-button>
        <my-button border cornered type="myWarning" size="mini">按钮</my-button>
        <my-button border cornered type="myDanger" size="small">按钮</my-button>
        <my-button border cornered type="myInfo" size="mini">按钮</my-button>
      </div>
      <div class="item">
        <h5 class="title">对角 reverse</h5>
        <my-button border cornered reverse>按钮</my-button>
        <my-button border cornered reverse type="myPrimary" size="medium">按钮</my-button>
        <my-button border cornered reverse type="mySuccess" size="small">按钮</my-button>
        <my-button border cornered reverse type="myWarning" size="mini">按钮</my-button>
        <my-button border cornered reverse type="myDanger" size="mini">按钮</my-button>
        <my-button border cornered reverse type="myInfo" size="mini">按钮</my-button>
      </div>
      <div class="item">
        <h5 class="title">四角</h5>
        <my-button border cornered4 >按钮</my-button>
        <my-button border cornered4 type="myPrimary">按钮</my-button>
        <my-button border cornered4 type="mySuccess" size="medium">按钮</my-button>
        <my-button border cornered4 type="myWarning" size="small">按钮</my-button>
        <my-button border cornered4 type="myDanger" size="mini">按钮</my-button>
        <my-button border cornered4 type="myInfo" size="mini">按钮</my-button>
      </div>
      <div class="item">
        <h5 class="title">element 样式</h5>
        <my-button>按钮</my-button>
        <my-button type='primary' size="medium" plain>按钮</my-button>
        <my-button type='success' size="small" round>按钮</my-button>
        <my-button type='info' size="mini" >按钮</my-button>
        <my-button type='warning' size="mini" icon="el-icon-message" circle></my-button>
        <my-button type='danger' size="mini">按钮</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from '@/components/myButton'
export default {
  name: 'my-Buttons',
  components: {
    myButton
  }
}
</script>
<style lang="scss" scoped>
.myButton {
  .item {
    .title {
      text-align: left;
    }
  }
}
</style>