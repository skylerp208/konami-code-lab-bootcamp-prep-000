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
  document.addEventListener('keydown', function(e) {
    let index = 0
    let key = e.key
    if (key === codes[index]) {
      index++
      if (index === codes.length) {
        alert('you fucking did it bb')
        index = 0
      }
    } else {
      index = 0
    }
  })
}