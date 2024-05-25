// fisher

// 🐟🐠🐡🦑🐙🐉

let fishies = {
     regfish: 0,
     tropfish: 0,
     puffers: 0,
     squids: 0,
     octopuses: 0,
     dragons: 0
};

let ids = ['regfish', 'tropfish', 'puffers', 'squids', 'octopuses', 'dragons']; // element ids

const names = ['regular fish 🐟', 'tropical fish 🐠', 'pufferfish 🐡', 'squid 🦑', 'octopus 🐙', 'dragon 🐉']; // for 'you caught a...' message

function fish() { // fishing function
     let num = Math.floor(Math.random() * ids.length);
     fishies[ids[num]]++;
     
     console.log(ids[num]); // debug

     document.getElementById(ids[num]).textContent = fishies[ids[num]]; // sets the HTML & updates the page

     document.getElementById('youcaught').textContent = 'You caught a' + names[num] + '!'; // tells you what you caught!
} // beta code left below just in case... pls ignore
     
     
/*
function fish() {
  if ( Math.floor(Math.random() * 7) != 0 ) {
    // console.log('🐟'); // debug
    regfish++; // increment
    document.getElementById('regfish').textContent = regfish; // update the value in HTML
    document.getElementById('youcaught').textContent = 'You caught a regular fish!';
  } else if ( Math.floor(Math.random() * 6) != 0 ) {
    // console.log('🐠'); // debug
    tropfish++;
    document.getElementById('tropfish').textContent = tropfish;
    document.getElementById('youcaught').textContent = 'You caught a tropical fish!';
  } else if ( Math.floor(Math.random() * 5) != 0 ) {
    // console.log('🐡'); // debug
    puffers++;
    document.getElementById('puffers').textContent = puffers;
    document.getElementById('youcaught').textContent = 'You caught a pufferfish!';
  } else if ( Math.floor(Math.random() * 4) != 0 ) {
    // console.log('🦑'); // debug
    squids++;
    document.getElementById('squids').textContent = squids;
    document.getElementById('youcaught').textContent = 'You caught a squid!';
  } else if ( Math.floor(Math.random() * 3) != 0 ) {
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
*/
