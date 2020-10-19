<template>
  <div class="layout">
    <el-container>
      <el-header>
        <vueCanvasNest :config="{color:'#1890ff', count: 8}" :el="'.el-header'"></vueCanvasNest>
        <span class="folder">
          <el-button size="mini" plain @click="turnFold"><i :class="iconName"></i></el-button>
        </span>
        <span class="logo">logo</span>
        <!-- <span class="logo2">logo</span> -->
      </el-header>
      <el-container>
        <el-aside :width="asideWidth">
          <el-menu >
            <el-menu-item v-for="item in userRoute" :key="item.name" v-if="!item.children" :index="item.path">
              <router-link :to="`/${item.path}`">
                <span>
                  <i :class="item.meta.icon" v-if="!item.meta.customIcon"></i>
                  <svg-icon :icon-class="item.meta.icon"  :class-name="item.meta.icon" v-else></svg-icon>
                  <span v-if="fold">{{item.meta.title}}</span>
                </span>
              </router-link>
            </el-menu-item>
            <el-submenu v-for="item in userRoute" :key="item.name" v-if="item.children && item.children.length > 0" :index="item.path">
              <template slot="title">
                <i :class="item.meta.icon" v-if="!item.meta.customIcon"></i>
                <svg-icon :icon-class="item.meta.icon"  :class-name="item.meta.icon" v-else></svg-icon>
                {{item.meta.title}}
              </template>
              <el-menu-item v-for="child in item.children" :key="child.name" :index="child.name">
                <router-link :to="`/${child.url}`">
                  <span>
                    <i :class="child.meta.icon" v-if="!child.meta.customIcon"></i>
                    <svg-icon :icon-class="child.meta.icon"  :class-name="child.meta.icon" v-else></svg-icon>
                    <span v-if="fold">{{child.meta.title}}</span>
                  </span>
                </router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import vueCanvasNest from 'vue-canvas-nest'
export default {
  name: 'my-Layout',
  components: {
    vueCanvasNest,
  },
  props: {

  },
  watch: {

  },
  data() {
    return {
      iconName: 'el-icon-s-fold',
      asideWidth: '220px',
      fold: true,
      userRoute: []
    }
  },
  computed: {

  },
  created() {

  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.userRoute = this.$store.state.user.userRoute
    },
    turnFold() {
      this.fold = !this.fold
      if (this.fold) {
        this.asideWidth = '220px'
        this.iconName = 'el-icon-s-fold'
      } else {
        this.asideWidth = '60px'
        this.iconName = 'el-icon-s-unfold'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  .logo {
    width: 200px;
    height: 50px;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    display: inline-block;
    float: left;
    background-image: url("../../../static/images/6.jpg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .logo2 {
    width: 200px;
    height: 50px;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    display: inline-block;
    position: absolute;
    left: 20px;
    top: 0px;
    color: transparent;
    background: #871317 -webkit-linear-gradient(
        left,
        #561214,
        #febaf7 50%,
        #ff0 90%,
        #561214
      ) no-repeat 0 0;
    background-size: 20% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: slideShine 4s linear infinite;
    animation: slideShine 4s linear infinite;
  }
  @keyframes slideShine {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }
  @-webkit-keyframes slideShine {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }
  .folder {
    display: inline-block;
    height: 50px;
    line-height: 50px;
  }
  .svg-icon {
    color: rgba(255, 255, 255, 0.95);
    font-size: 20px;
  }
}
</style>
<style>
.el-header {
  height: 50px !important;
  line-height: 50px;
  text-align: left;
  border-bottom: 1px solid #cccccc;
}
.el-container {
  height: calc(100vh - 50px);
}
.el-container .el-aside {
  background-color: rgb(0, 21, 41);
  color: rgb(255, 255, 255, 0.95);
}
.el-menu {
  border: none;
  background-color: rgb(0, 21, 41);
}
.el-menu-item {
  height: 50px;
  line-height: 50px;
  background-color: rgb(0, 21, 41);
  color: rgb(255, 255, 255, 0.95);
}
.el-menu-item.is-active {
  background-color: #1890ff;
}
.el-menu-item:hover {
  background-color: #1890ff;
}
.el-menu-item a {
  display: inline-block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: rgb(255, 255, 255, 0.95);
}
.el-menu-item a > span {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
}
.el-menu-item a > span > i {
  color: rgb(255, 255, 255, 0.95);
  font-size: 20px;
}
.el-menu-item a > span > span {
  margin-left: 15px;
}
.el-aside::-webkit-scrollbar {
  width: 0px;
}
.el-main::-webkit-scrollbar {
  width: 5px;
}
/* 展开路由 */
.el-submenu {
  background-color: rgb(0, 21, 41);
}
.el-submenu__title {
  height: 50px;
  text-align: left;
  color: rgb(255, 255, 255, 0.95);
}
.el-submenu__title:hover {
  background-color: #1890ff;
}
.el-submenu__title > i {
  color: rgb(255, 255, 255, 0.95);
}
.el-submenu__title > i:first-child {
  color: rgb(255, 255, 255, 0.95);
  margin-right: 20px;
}
</style>
