// fisher

// 🐟🐠🐡

let regfish = document.getElementById('regfish');
let tropfish = document.getElementById('tropfish');
let puffers = document.getElementById('puffers');

function fish() {
  if (Math.round(Math.random())) {
    console.log('🐟');
    regfish++;
  } else if (Math.round(Math.random())) {
    console.log('🐠');
    tropfish++;
  } else if (Math.round(Math.random())) {
    console.log('🐡');
    puffers++;
  } else { return fish() };
} // preliminary
