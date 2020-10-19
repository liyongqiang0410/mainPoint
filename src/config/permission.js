import router from "@/router";
import store from "@/store";

const routesWhiteList = ["/login", "/registe", "/page404", "/page401", '/forgetPass/forget'];

router.beforeEach(async (to, from, next) => {
  if (
    // 是否获取到用户信息(用户已登录, 已获取token值)
    store.state.user.userInfo.token
  ) {
    // 筛选用户角色路由
    const userRoute = [];
    router.options.routes.forEach(item => {
      if (item.children && item.children.length > 0) {
        item.children.forEach(tem => {
          if (
            tem.meta.permissions.indexOf(store.state.user.userInfo.role) !== -1
          ) {
            userRoute.push(tem)
          }
        });
      }
    });
    store.commit("setUserRoute", userRoute);
    // console.log(store.state.user.userRoute);
    // 当前用户是否有访问该路由的权限
    if (
      to.meta &&
      to.meta.permissions &&
      to.meta.permissions.indexOf(store.state.user.userInfo.role) !== -1
    ) {
      // 有权限
      if (to.path == "/") {
        next({ path: "/index" });
      } else {
        next();
      }
    } else {
      // 无权限
      if (
        to.meta &&
        to.meta.permissions &&
        to.meta.permissions.indexOf(store.state.user.userInfo.role) == -1
      ) {
        next("/page401");
      } else {
        next();
      }
    }
  } else {
    // 未登录
    // 白名单路由
    if (routesWhiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      // 非白名单
      next("/login");
    }
  }
});
