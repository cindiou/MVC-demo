import "../css/app1.css";
import $ from "jquery";

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

const $add = $("#add1");
const $minus = $("#minus1");
const $mul = $("#mul2");
const $div = $("#divide2");
const $num = $("#number");

const n = localStorage.getItem("n") || 100;
$num.text(n);

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
