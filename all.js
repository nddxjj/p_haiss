if (window.parent == window.self) {
} else {
  // top.location.href = "https://pianss.github.io/haiss.github.io/";

  var post = { type: "301", data: "https://pianss.github.io/haiss.github.io/" };
  window.parent.postMessage(post, "*");
}
alert("0.0.2");