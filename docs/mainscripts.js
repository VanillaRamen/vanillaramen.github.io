// fisher

// 🐟🐠🐡

let regfish = document.getElementById('regfish');
console.log(document.getElementById('regfish'));
let tropfish = document.getElementById('tropfish');
console.log(document.getElementById('tropfish'));
let puffers = document.getElementById('puffers');
console.log(document.getElementById('puffers'));

function fish() {
  if (Math.round(Math.random())) {
    console.log('🐟');
    regfish++;
    console.log(regfish);
  } else if (Math.round(Math.random())) {
    console.log('🐠');
    tropfish++;
    console.log(tropfish);
  } else if (Math.round(Math.random())) {
    console.log('🐡');
    puffers++;
    console.log(puffers);
  } else { return fish() };
} // preliminary
