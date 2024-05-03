// fisher

// 🐟🐠🐡

function fish() {
  if (Math.round(Math.random())) {
    console.log('🐟');
  } else if (Math.round(Math.random())) {
    console.log('🐠');
  } else if (Math.round(Math.random())) {
    console.log('🐡');
  } else { return fish() };
} // preliminary
