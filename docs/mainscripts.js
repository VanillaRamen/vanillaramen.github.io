// fisher

// 🐟🐠🐡

let regfish = 0; // initalizations
let tropfish = 0;
let puffers = 0;

function fish() {
  if (Math.round(Math.random())) {
    console.log('🐟');
    regfish++; // increment
    document.getElementById('regfish').textContent = regfish; // update the value in HTML
    document.getElementById('youcaught').textContent = 'You caught a regular fish!';
  } else if (Math.round(Math.random())) {
    console.log('🐠');
    tropfish++;
    document.getElementById('tropfish').textContent = tropfish;
    document.getElementById('youcaught').textContent = 'You caught a tropical fish!';
  } else if (Math.round(Math.random())) {
    console.log('🐡');
    puffers++;
    document.getElementById('puffers').textContent = puffers;
    document.getElementById('youcaught').textContent = 'You caught a pufferfish!';
  } else { return fish() };
} // preliminary
