// fisher

// 🐟🐠🐡

let regfish = 0; // initalizations
let tropfish = 0;
let puffers = 0;

function fish() {
  if (Math.round(Math.random())) {
    console.log('🐟');
    regfish++; // increment
    document.getElementById('regfish').innerHTML = regfish; // update the value in HTML
    document.getElementById('youcaught').innerHTML = 'You caught a regular fish!';
  } else if (Math.round(Math.random())) {
    console.log('🐠');
    tropfish++;
    document.getElementById('tropfish').innerHTML = tropfish;
    document.getElementById('youcaught').innerHTML = 'You caught a tropical fish!';
  } else if (Math.round(Math.random())) {
    console.log('🐡');
    puffers++;
    document.getElementById('puffers').innerHTML = puffers;
    document.getElementById('youcaught').innerHTML = 'You caught a pufferfish!';
  } else { return fish() };
} // preliminary
