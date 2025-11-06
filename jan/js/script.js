// Dark mode toggle
const modeToggle = document.querySelector('.mode-toggle');
const body = document.body;
// Hours modal
const hoursBtn = document.getElementById('hours-btn');
const hoursModal = document.getElementById('hours-modal');
const hoursClose = document.getElementById('hours-close');

// ✅ Always start in dark mode
body.classList.add('dark');
localStorage.setItem('theme', 'dark'); // optional if you want to record default

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const currentMode = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentMode);
});


hoursBtn.addEventListener('click', () => {
  hoursModal.style.display = 'block';
});

hoursClose.addEventListener('click', () => {
  hoursModal.style.display = 'none';
});

// Close if clicked outside modal
window.addEventListener('click', (e) => {
  if (e.target === hoursModal) {
    hoursModal.style.display = 'none';
  }
});


// Sustainability modal
const sustainabilityBtn = document.getElementById('sustainability-btn');
const sustainabilityModal = document.getElementById('sustainability-modal');
const sustainabilityClose = document.getElementById('sustainability-close');

sustainabilityBtn.addEventListener('click', () => {
  sustainabilityModal.style.display = 'block';
});

sustainabilityClose.addEventListener('click', () => {
  sustainabilityModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === sustainabilityModal) {
    sustainabilityModal.style.display = 'none';
  }
});
