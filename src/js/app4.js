import "../css/app4.css";
import $ from "jquery";

const $circle = $("#app4 .circle");

$circle.hover(
  () => {
    $circle.addClass("active");
  },
  () => {
    $circle.removeClass("active");
  }
);
