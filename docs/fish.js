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
     let num = Math.floor(Math.random() * names.length);
     fishies[ids[num]]++;
     
     console.log(names[num]); // debug

     document.getElementById(ids[num]).textContent = fishies[ids[num]]; // sets the HTML & updates the page

     document.getElementById('youcaught').textContent = 'You caught a ' + names[num] + '!'; // tells you what you caught!
} // i genuinely do not know what is wrong here
