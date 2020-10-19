import { Loading } from "element-ui";

const GP = (Vue, opts = {}) => {
  // 花里胡哨的加载效果
  Vue.prototype.$baseColorfullLoading = (index, text, type) => {
    let loading;
    // 默认
    if (!index) {
      loading = Loading.service({
        lock: true,
        text: text || "正在加载中",
        spinner: "dots-loader",
        background: type ? "rgba(0, 0, 0, .8)" : "hsla(0,0%,100%,.8)"
      });
    } else {
      switch (index) {
        case 1:
          index = "dots";
          break;
        case 2:
          index = "gauge";
          break;
        case 3:
          index = "inner-circles";
          break;
        case 4:
          index = "plus";
          break;
        case 5:
          index = "panel";
          break;
      }
      loading = Loading.service({
        lock: true,
        text: text || "正在加载中",
        spinner: index + "-loader",
        background: type ? "rgba(0, 0, 0, .8)" : "hsla(0,0%,100%,.8)"
      });
    }
    return loading;
  };
  // 没那么花里胡哨的加载效果
  Vue.prototype.$baseLoading = (index, text, type) => {
    let loading;
    if (!index) {
      loading = Loading.service({
        lock: true,
        text: text || "正在加载中",
        background: type ? "rgba(0, 0, 0, .8)" : "hsla(0,0%,100%,.8)"
      });
    } else {
      loading = Loading.service({
        lock: true,
        text: text || "正在加载中",
        spinner: "vab-loading-type" + index,
        background: type ? "rgba(0, 0, 0, .8)" : "hsla(0,0%,100%,.8)"
      });
    }
    return loading;
  };
  // 有点花里胡哨的单调加载效果
  Vue.prototype.$baseSimpleLoading = (index, text, type) => {
    let loading;
    if (!index) {
      loading = Loading.service({
        lock: true,
        text: text || "正在加载中",
        spinner: "multipleCircle" + "-loader",
        background: type ? "rgba(0, 0, 0, .8)" : "hsla(0,0%,100%,.8)"
      });
    } else {
      switch (index) {
        case 1:
          index = "multipleCircle";
          break;
      }
      loading = Loading.service({
        lock: true,
        text: text || "正在加载中",
        spinner: "multipleCircle" + "-loader",
        background: type ? "rgba(0, 0, 0, .8)" : "hsla(0,0%,100%,.8)"
      });
    }
    return loading
  };
};

if (typeof window !== "undefined" && window.Vue) {
  GP(window.Vue);
}
export default GP;
