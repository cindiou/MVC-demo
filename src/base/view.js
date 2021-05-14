import $ from "jquery";
import EventBus from "./eventBus.js";

class View extends EventBus {
  /*   constructor(options) {
    Object.assign(this, options);
  } */

  //{ el, html, render, data ,events}
  constructor(options) {
    Object.assign(this, options);
    this.el = $(this.el);

    this.render(this.data); //渲染页面
    this.bindEvents(); //绑定事件
  }

  bindEvents() {
    for (const key in this.events) {
      const callback = this.events[key];

      const index = key.indexOf(" ");
      const eventType = key.slice(0, index);
      const selector = key.slice(index + 1);

      this.el.on(eventType, selector, callback);
    }
  }
}
