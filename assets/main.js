/* 码跃学院 · 站点脚本：移动端菜单 / 当前页高亮 / 咨询表单（演示模式） */
(function () {
  "use strict";

  /* 移动端胶囊菜单开合 */
  var pillnav = document.querySelector(".pillnav");
  var burger = document.querySelector(".nav-burger");
  if (pillnav && burger) {
    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      pillnav.classList.toggle("open");
    });
    document.addEventListener("click", function (e) {
      if (pillnav.classList.contains("open") && !pillnav.contains(e.target)) {
        pillnav.classList.remove("open");
      }
    });
    pillnav.querySelectorAll(".nav-drawer a").forEach(function (a) {
      a.addEventListener("click", function () { pillnav.classList.remove("open"); });
    });
  }

  /* 导航当前页高亮（按路径匹配） */
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".pillnav a[href]").forEach(function (a) {
    var href = a.getAttribute("href").split("#")[0];
    if (href && href === path) a.classList.add("active");
  });

  /* 咨询表单：演示模式 —— 只做前端校验与提示，不提交、不伪造成功 */
  var form = document.getElementById("consult-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#f-name");
      var phone = form.querySelector("#f-phone");
      var result = document.getElementById("form-result");
      if (!name.value.trim()) { name.focus(); return; }
      if (!/^1[3-9]\d{9}$/.test(phone.value.trim())) {
        phone.focus();
        phone.style.borderColor = "#d4380d";
        return;
      }
      phone.style.borderColor = "";
      var course = document.getElementById("f-course");
      var city = document.getElementById("f-city");
      result.innerHTML =
        "<b>演示模式：</b>本站为设计演示站点，信息未被提交或存储。" +
        "真实场景中，顾问将按「" + course.value + " · " + city.value +
        "」为您匹配课程与开班校区，并在 24 小时内回访（示意文案）。";
      result.classList.add("show");
      form.querySelector(".form-submit").textContent = "已了解（演示模式）";
    });
  }

  /* FAQ details 单开（可选体验：同一时间只展开一项） */
  var faqs = document.querySelectorAll(".faq-item");
  faqs.forEach(function (d) {
    d.addEventListener("toggle", function () {
      if (d.open) faqs.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });
})();
