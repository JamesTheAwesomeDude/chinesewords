window.addEventListener("load", readTextFile);
function readTextFile() {
  const chinesewordstxt = new XMLHttpRequest();
  chinesewordstxt.open("GET", "https://enopoletus.github.io/chinesewords/chinesewords.txt", true);
  if (chinesewordstxt.readyState == XMLHttpRequest.DONE) {
  if (chinesewordstxt.status == 200) {console.log(chinesewordstxt.responseText)}
    else if (chinesewordstxt.status == 400) {console.log('There was an error 400');}
    else {console.log('something else other than 200 was returned');};
  };
};
