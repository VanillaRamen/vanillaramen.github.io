// fisher

// 🐟🐠🐡🦑🐙🐉

let [regfish, tropfish, puffers,
     squids, octopuses, dragons] =
  [0, 0, 0,
   0, 0, 0];
// initialize variables as 0

function fish() {
  if ( Math.floor(Math.random() * 10) != 0 ) {
    // console.log('🐟'); // debug
    regfish++; // increment
    document.getElementById('regfish').textContent = regfish; // update the value in HTML
    document.getElementById('youcaught').textContent = 'You caught a regular fish!';
  } else if ( Math.floor(Math.random() * 8) != 0 ) {
    // console.log('🐠'); // debug
    tropfish++;
    document.getElementById('tropfish').textContent = tropfish;
    document.getElementById('youcaught').textContent = 'You caught a tropical fish!';
  } else if ( Math.floor(Math.random() * 8) != 0 ) {
    // console.log('🐡'); // debug
    puffers++;
    document.getElementById('puffers').textContent = puffers;
    document.getElementById('youcaught').textContent = 'You caught a pufferfish!';
  } else if ( Math.floor(Math.random() * 6) != 0 ) {
    // console.log('🦑'); // debug
    squids++;
    document.getElementById('squids').textContent = squids;
    document.getElementById('youcaught').textContent = 'You caught a squid!';
  } else if ( Math.floor(Math.random() * 4) != 0 ) {
    // console.log('🐙'); // debug
    octopuses++;
    document.getElementById('octopuses').textContent = octopuses;
    document.getElementById('youcaught').textContent = 'You caught an octopus!';
  } else if ( Math.floor(Math.random() * 2) != 0 ) {
    // console.log('🐉'); // debug
    dragons++;
    document.getElementById('dragons').textContent = dragons;
    document.getElementById('youcaught').textContent = 'You caught a dragon!';
  } else { return fish() };
} // fishing logic; need to redo to be a lot more efficient and concise
