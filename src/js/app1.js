import "../css/app1.css";
import $ from "jquery";

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
