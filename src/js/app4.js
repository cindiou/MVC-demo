import "../css/app4.css";
import $ from "jquery";

const html = `
<section id="app4">
  <div class="circle"></div>
</section>  
`;

const $element = $(html);
$element.appendTo($("body>.page"));

const $circle = $("#app4 .circle");

$circle.hover(
  () => {
    $circle.addClass("active");
  },
  () => {
    $circle.removeClass("active");
  }
);
