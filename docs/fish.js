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

let ids = [['regfish', 'tropfish'], ['puffers', 'squids'], ['octopuses', 'dragons']]; // element ids

const names = [['regular fish 🐟', 'tropical fish 🐠'], ['pufferfish 🐡', 'squid 🦑'], ['octopus 🐙', 'dragon 🐉']]; // for 'you caught a...' message

function fish() { // fishing function
     let tier = Math.floor(Math.random() * names.length);
     
     let num = Math.floor(Math.random() * names[tier].length);
     fishies[ids[tier][num]]++;
     
     console.log(names[tier][num]); // debug

     document.getElementById(ids[tier][num]).textContent = fishies[ids[tier][num]]; // sets the HTML & updates the page

     document.getElementById('youcaught').textContent = 'You caught a ' + names[tier][num] + '!'; // tells you what you caught!
};
