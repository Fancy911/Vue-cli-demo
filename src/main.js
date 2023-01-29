import { createApp } from "vue";
import App from "./App";
import router from "./router";

// import ElementPlus from "element-plus"; // 引入element-plus的所有样式组件
// import "element-plus/dist/index.css"; // 引入element-plus的所有样式的文件

// 需要在创建app之后，挂载app之前，引入element-plus
createApp(App)
  .use(router)
  // .use(ElementPlus)
  .mount(document.getElementById("app"));
