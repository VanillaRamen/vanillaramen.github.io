// fisher

// 🐟🐠🐡

let regfish = document.getElementById('regfish').innerHTML; // these should all be 0...
console.log(typeof document.getElementById('regfish').innerHTML);
let tropfish = document.getElementById('tropfish').innerHTML;
console.log(tropfish);
let puffers = document.getElementById('puffers').innerHTML;
console.log(typeof puffers);

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
