import "../css/app2.css";
import $ from "jquery";

const localKey = "app2.index";
const eventsBus = $(window);

const model = {
  data: {
    index: parseInt(localStorage.getItem(localKey)) || 0,
  },
};

const view = {
  el: null,

  html: (index) => {
    return `
<div>
  <ul class="tab-bar">
    <li class=${index === 0 ? "selected" : ""}>1</li>
    <li class=${index === 0 ? "" : "selected"}>2</li>
  </ul>
  <ul class="tab-content">
    <li class=${index === 0 ? "active" : ""}>内容1</li>
    <li class=${index === 0 ? "" : "active"}>内容2</li>
  </ul>
</div>
`;
  },
  init(el, data) {
    view.el = $(el);
    view.render(data);
  },

  render(data) {
    if (view.el.children().length !== 0) {
      view.el.empty();
    }
    $(view.html(data.index)).appendTo(view.el);
  },
};

const control = {
  init(el) {
    view.init(el, model.data);
    eventsBus.on("indexUpdate", () => {
      view.render(model.data);
    });
    control.bindEvents();
  },
  events: {
    "click .tab-bar li": (e) => {
      const index = $(e.currentTarget).index();
      control.update({ index });
    },
  },
  bindEvents() {
    for (const key of Object.keys(control.events)) {
      const index = key.indexOf(" ");
      const selector = key.slice(index + 1);
      const eventType = key.slice(0, index);
      const callback = control.events[key];

      view.el.on(eventType, selector, callback);
    }
  },
  update(data) {
    Object.assign(model.data, data);
    localStorage.setItem(localKey, data.index);
    eventsBus.trigger("indexUpdate");
  },
  create() {},
  delete() {},
  get() {},
};

export default control;
