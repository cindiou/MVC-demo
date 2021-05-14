import "../css/app1.css";
import $ from "jquery";

//页面元素，初始化并添加到DOM树中，渲染
const html = `
<section id="app1">
  <div class="output">
    <span id="number">10</span>
  </div>
  <div class="actions">
    <button id="add1">+1</button>
    <button id="minus1">-1</button>
    <button id="mul2">*2</button>
    <button id="divide2">/2</button>
  </div>
</section>
`;

const $element = $(html);
$element.appendTo($("body>.page"));

//寻找操作元素
const $add = $("#add1");
const $minus = $("#minus1");
const $mul = $("#mul2");
const $div = $("#divide2");
const $num = $("#number");

//查看初始化状态，辨别是否存在缓存数据，识别用户是否初次登陆
const n = localStorage.getItem("n") || 100;
$num.text(n);

//操作对应元素
$add.on("click", () => {
  let n = parseInt($num.text());
  n++;
  $num.text(n);
  localStorage.setItem("n", n);
});

$minus.on("click", () => {
  let n = parseInt($num.text());
  n--;
  $num.text(n);
  localStorage.setItem("n", n);
});

$mul.on("click", () => {
  let n = parseInt($num.text());
  n *= 2;
  $num.text(n);
  localStorage.setItem("n", n);
});

$div.on("click", () => {
  let n = parseInt($num.text());
  n /= 2;
  $num.text(n);
  localStorage.setItem("n", n);
});
