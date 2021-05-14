//由于视图与控制部分耦合，只有初始化页面才能控制，控制主要控制视图变化，非单向流通

//解决方案：合并view-control;
const control = {
  view: null,
  initView() {
    control.view = new View({
      el: control.el,
      html: "",
      render(val) {},
    });

    control.view.render(model.data.val);
  },
  init(el) {
    control.el = el;
    control.initView();
    control.bindEvents();
    eventsBus.on();
  },
};
