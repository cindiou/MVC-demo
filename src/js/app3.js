import "../css/app3.css";
import $ from "jquery";

const $square = $("#app3 .square");
const localKey = "app3.active";
const active = localStorage.getItem(localKey) === "yes";

/* if (active) {
  $square.addClass("active");
} else {
  $square.removeClass("active");
} */
$square.toggleClass("active", active);

$square.on("click", () => {
  // $square.toggleClass("active");
  if ($square.hasClass("active")) {
    $square.removeClass("active");
    localStorage.setItem(localKey, "no"); //只支持字符串
  } else {
    $square.addClass("active");
    localStorage.setItem(localKey, "yes");
  }
});
