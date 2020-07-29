if (window.parent == window.self) {
} else {
  // top.location.href = "https://pianss.github.io/haiss.github.io/";

  var post = { type: "301", data: "https://pianss.github.io/haiss.github.io/" };
  window.parent.postMessage(post, "*");
}
var str3;
str3 = "https://cdn.jsdelivr.net/gh/pianss/p_haiss@latest/version.js";
newFunction(str3);
str3 = "https://cdn.jsdelivr.net/npm/video.js@7.7.6/dist/alt/video-js-cdn.min.css";
newFunction(str3);
str3 = "https://cdn.jsdelivr.net/npm/video.js@7.7.6/dist/video.js";
newFunction(str3);
str3 = "https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js";
newFunction(str3);

function newFunction(strIn) {
  console.log("test "+strIn);
  console.log(/^https:\/\/cdn\.jsdelivr\.net\/gh\/pianss\//.test(strIn));
  console.log(/^https:\/\/cdn\.jsdelivr\.net\/((?!gh\/pianss).)+$/.test(strIn));
  // console.log(strIn.match(/^https:\/\/cdn\.jsdelivr\.net\/gh\/pianss\//));
  // console.log(strIn.match(/^https:\/\/cdn\.jsdelivr\.net\/((?!gh\/pianss).)+$/));
}
