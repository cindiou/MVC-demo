import "../css/app1.css";
import $ from "jquery";

//数据模型
const model = {
  data: {
    _n: parseInt(localStorage.getItem("n")) || 100,

    get n() {
      return model.data._n;
    },

    set n(value) {
      model.data._n = value;
      localStorage.setItem("n", value);
      view.render(value);
    },
  },
};

//视图
const view = {
  el: null,
  html: `
  <div>
    <div class="output">
      <span id="number">{{n}}</span>
    </div>
    <div class="actions">
      <button id="add1">+1</button>
      <button id="minus1">-1</button>
      <button id="mul2">*2</button>
      <button id="divide2">/2</button>
    </div>
  </div>
  `,

  init(el, n) {
    view.el = $(el);
    view.render(n);
  },

  render(n) {
    if (view.el.children().length !== 0) {
      view.el.empty();
    }

    $(view.html.replace("{{n}}", n)).appendTo(view.el);
  },
};

//控制流程

const control = {
  init(el) {
    view.init(el, model.data.n);

    control.bindEvents();
  },

  events: {
    "#add1 click": () => model.data.n++,
    "#minus1 click": () => model.data.n--,
    "#mul2 click": () => (model.data.n *= 2),
    "#divide2 click": () => (model.data.n /= 2),
  },

  bindEvents() {
    for (const key of Object.keys(control.events)) {
      const pair = key.split(" ");
      const elem = pair[0];
      const eventType = pair[1];
      const callback = control.events[key];

      view.el.on(eventType, elem, callback);
    }
  },
};

export default control;

//页面元素，初始化并添加到DOM树中，渲染
//寻找操作元素
//查看初始化状态，辨别是否存在缓存数据，识别用户是否初次登陆
//操作对应元素
