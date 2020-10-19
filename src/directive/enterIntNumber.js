import Vue from 'vue'
Vue.directive("intnumber", {
  // 钩子函数
  // 第一次绑定在元素上时调用,只调用一次,用来做初始化
  bind() {},
  /**当绑定元素插入到父节点时调用,比存在父节点
   * @param {*} el dom节点
   * @param {*} binding 只读参数
   */
  inserted(el, binding) {
    let trigger = (el, type) => {
      const eventType = "HTMLEvents";
      /** document.createEvent
       * e 被创建的事件对象
       * @params {*} eventType [string] 要创建的事件类型
       * 可选值有{UIEvents, MouseEvents, MutationEvents, HTMLEvents}
       */
      const e = document.createEvent(eventType);
      /** 初始化新事件的属性
       * @paras {*} eventType  [string] 事件类型
       * @paras {*} canBubble  [Boolean]是否冒泡
       * @paras {*} cancelable [Boolean]是否可用prevenDefault()取消默认事件
       */
      e.initEvent(type, true, true);
      /**
       * @params {*} e 需要派发的事件对象
       */
      el.dispatchEvent(e);
    };
    el.addEventListener("keyup", e => {
      let input = e.target;
      let reg = new RegExp("^\\d{1}\\d*$"); //正则验证是否是数字
      let correctReg = new RegExp("\\d{1}\\d*"); //正则获取是数字的部分
      let matchRes = input.value.match(reg);
      if (matchRes === null) {
        // 若不是纯数字 把纯数字部分用正则获取出来替换掉
        let correctMatchRes = input.value.match(correctReg);
        if (correctMatchRes) {
          input.value = correctMatchRes[0];
        } else {
          input.value = "";
        }
      }
      trigger(input, "input");
    });
  },
  // VNode更新调用
  update() {},
  // 组件的VNode及其子节点的VNode更新时调用
  componentUpdate() {},
  // 解绑
  unbind() {}
});
