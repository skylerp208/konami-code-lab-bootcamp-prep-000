const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
}

let index = 0
function konamiTest(e) {
  let key = e.key
  if (key === codes[index]) {
    index++
    if (index === codes.length) {
      alert("you fucking did it bb")
      index = 0
    }
  } else {
    index = 0
  }
}