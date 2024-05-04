// fisher

// 🐟🐠🐡

let regfish = 0; // initalizations
let tropfish = 0;
let puffers = 0;
let squids = 0;
let octopuses = 0;
let dragons = 0;

function fish() {
  if ( Math.floor(Math.random() * 5) != 0 ) {
    console.log('🐟');
    regfish++; // increment
    document.getElementById('regfish').textContent = regfish; // update the value in HTML
    document.getElementById('youcaught').textContent = 'You caught a regular fish!';
  } else if ( Math.floor(Math.random() * 5) != 0 ) {
    console.log('🐠');
    tropfish++;
    document.getElementById('tropfish').textContent = tropfish;
    document.getElementById('youcaught').textContent = 'You caught a tropical fish!';
  } else if ( Math.floor(Math.random() * 5) != 0 ) {
    console.log('🐡');
    puffers++;
    document.getElementById('puffers').textContent = puffers;
    document.getElementById('youcaught').textContent = 'You caught a pufferfish!';
  } else if ( Math.floor(Math.random() * 5) != 0 ) {
    console.log('🦑');
    squids++;
    document.getElementById('squids').textContent = squids;
    document.getElementById('youcaught').textContent = 'You caught a squid!';
  } else if ( Math.floor(Math.random() * 5) != 0 ) {
    console.log('🐙');
    octopuses++;
    document.getElementById('octopuses').textContent = octopuses;
    document.getElementById('youcaught').textContent = 'You caught an octopus!';
  } else if ( Math.floor(Math.random() * 5) != 0 ) {
    console.log('🐉');
    dragons++;
    document.getElementById('dragons').textContent = dragons;
    document.getElementById('youcaught').textContent = 'You caught a dragon!';
  } else { return fish() };
} // fishing logic; need to redo to be a lot more efficient and concise
