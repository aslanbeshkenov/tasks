const path = "/users/download/index.html";

function isHtml(str) {
  if (str.slice(-5).toLowerCase() == ".html") {
    return true;
  }
}

console.log(isHtml(path));
