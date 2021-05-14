import "../css/app2.css";
import $ from "jquery";

const html = `
<section id="app2">
  <ul class="tab-bar">
    <li>1</li>
    <li>2</li>
  </ul>
  <ul class="tab-content">
    <li>内容1</li>
    <li>内容2</li>
  </ul>
</section>
`;
const $element = $(html);
$element.appendTo($("body>.page"));

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
const localKey = "app2.index";
const index = localStorage.getItem(localKey) || 0;

$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");

  const index = $li.index();
  localStorage.setItem(localKey, index);
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tabBar.children().eq(index).trigger("click");
