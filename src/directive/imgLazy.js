// 图片未加载时的默认贴图
import baseImg from "@/assets/logo.png";
// 创建一个监听器
let observer = new IntersectionObserver(entries => {
  // entries是所有被监听对象的集合
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 当被监听元素到临界值且未加载图片时触发。
      !entry.target.isLoaded && showImage(entry.target, entry.target.data_src);
    }
  });
});
function showImage(el, imgSrc) {
  const img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    el.src = imgSrc;
    el.isLoaded = true;
  };
}
export default {
  // 这里用inserted和bind都行，因为IntersectionObserver时异步的，以防意外还是用inserted好一点
  // inserted和bind的区别在于inserted时元素已经插入页面，能够直接获取到dom元素的位置信息。
  inserted(el, binding) {
    // 初始化时展示默认图片
    el.src = baseImg;
    // 将需要加载的图片地址绑定在dom上
    el.data_src = binding.value;
    observer.observe(el);
  },
  unbind() {
    // 停止监听
    observer.disconnect();
  }
};
