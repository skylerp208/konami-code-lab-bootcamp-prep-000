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
   let key = e.key
   let i = 0
   if (key === codes[i]) {
     i++;
     if (i === codes.length){
       alert('You did it bb');
       index = 0
     }
   } else {
     index = 0
   } 
  })}