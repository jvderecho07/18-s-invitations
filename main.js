// ── MUSIC ──
var music    = document.getElementById('bg-music');
var musicBtn = document.getElementById('music-btn');
var iconOn   = document.getElementById('music-icon-on');
var iconOff  = document.getElementById('music-icon-off');

function setPlaying(playing) {
  if (playing) {
    iconOn.style.display  = '';
    iconOff.style.display = 'none';
    musicBtn.classList.add('playing');
  } else {
    iconOn.style.display  = 'none';
    iconOff.style.display = '';
    musicBtn.classList.remove('playing');
  }
}

// Attempt autoplay on load
music.volume = 0.5;
var autoplayPromise = music.play();
if (autoplayPromise !== undefined) {
  autoplayPromise
    .then(function() { setPlaying(true); })
    .catch(function() {
      // Autoplay blocked — wait for first user interaction
      setPlaying(false);
      document.addEventListener('click', function tryPlay() {
        music.play().then(function() { setPlaying(true); });
        document.removeEventListener('click', tryPlay);
      }, { once: true });
    });
}

// Toggle on button click
musicBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  if (music.paused) {
    music.play().then(function() { setPlaying(true); });
  } else {
    music.pause();
    setPlaying(false);
  }
});

//PARTICLESSS
const container = document.getElementById('particles');
for (let i = 0; i < 40; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    --dur: ${6 + Math.random() * 10}s;
    --delay: ${Math.random() * 10}s;
    width: ${6 + Math.random() * 8}px;
    height: ${6 + Math.random() * 8}px;
    opacity: 0;
  `;
  container.appendChild(p);
}

// COUNTDOWNESS
var countdownTimer;
function updateCountdown() {
  var target = new Date('2026-05-24T17:30:00');
  var now    = new Date();
  var diff   = target - now;

  if (diff <= 0) {
    document.getElementById('cd-days').textContent  = '00';
    document.getElementById('cd-hours').textContent = '00';
    document.getElementById('cd-mins').textContent  = '00';
    document.getElementById('cd-secs').textContent  = '00';
    clearInterval(countdownTimer);
    return;
  }

  var days  = Math.floor(diff / 86400000);
  var hours = Math.floor((diff % 86400000) / 3600000);
  var mins  = Math.floor((diff % 3600000)  / 60000);
  var secs  = Math.floor((diff % 60000)    / 1000);

  document.getElementById('cd-days').textContent  = String(days).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-mins').textContent  = String(mins).padStart(2, '0');
  document.getElementById('cd-secs').textContent  = String(secs).padStart(2, '0');
}
updateCountdown();
countdownTimer = setInterval(updateCountdown, 1000);

//SCROLLERSS
const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(function (el) {
  revealObserver.observe(el);
});

// ── NAMES MODAL ──
var modalData = {
  candles: {
    label: '18 Candles',
    names: [
      'Evalyn Zuniega',
      'Maria Aly Roge Loneza',
      'Elizah Marie Zuniega',
      'Marial Angel Zuniega',
      'Mia Amor',
      'Twiggy Maddela',
      'Kimberly Saluya',
      'Alyana Joy Fernandez',
      'Vanie Fe Bazar',
      'Lindsay Galicia',
      'Ilyn Orticio',
      'Riza Mae Mirandilla',
      'Therese Mirandilla',
      'Mariam Felice Arroco',
      'Paula Sotto',
      'Newzant De Guzman',
      'Mary Kristin Louis Arcos',
      'Allyn Loneza (Mother)'
    ]
  },
  flowers: {
    label: '18 Flowers',
    names: [
      'Mateo Al Roger Loneza',
      'Ryl Adrino',
      'James Derecho',
      'Jeunir Zuniega',
      'Jesvir Zuniega',
      'Romulo Ray Balisnomo',
      'Iellyx Martin',
      'Pax Perol',
      'Dominic Bajamundi',
      'Ceriaco Nidea',
      'Andrei Baylon',
      'Khen Lominario',
      'Rayver Periña',
      'Joseph Llamera',
      'Justin Arroco',
      'Daniel Arroco',
      'Francis Isles',
      'Rogelio Loneza Jr. (Father)'
    ]
  },
  treasures: {
    label: '18 Treasures',
    names: [
      'Rhianna Isabel Alfonso',
      'Ceriaco Nidea',
      'Twiggy Maddela',
      'Kimberly Saluya',
      'Yllelix Martin',
      'Nikka Dela Rama',
      'Maria Antares Mikaela Ogayon',
      'Vanie Fe Bazar',
      'Manu Andi Sapaula',
      'Shiela Lotivio',
      'Alyana Fernandez',
      'Hazel Brosas',
      'Mia Amor',
      'Paula Sotto',
      'Danielle Fay Marin',
      'Mary Kristin Arcos',
      'Newzant Zebdee De Guzman',
      'Mavi Zuniega'
    ]
  },
  bluebills: {
    label: '18 Blue Bills',
    names: [
      'Jesvir Zuniega',
      'Elizah Marie Zuniega',
      'Jeunir Zuniega',
      'Myla and Joseph Derecho',
      'Lilet Abogado',
      'Lorabelle Pura',
      'Alvin and Mafi Zuniega',
      'Marisol Montalban',
      'Anji Montalban',
      'May Annie Razon',
      'Bem Dia',
      'Merli Ann Casile',
      'June Villavicencio',
      'Lovely Buisa-Adrino',
      'Ivy Venofra',
      'Joey and Ninang Joy',
      'Luke Arroyo',
      'Mayen Mariaña'
    ]
  },
  shots: {
    label: '18 Shots',
    names: [
      'Marial Zuniega',
      'Jesvir Zuniega',
      'Jeunir Zuniega',
      'James Derecho',
      'Khen Lominario',
      'Vanie Fe Bazar',
      'Santi Espares',
      'Andrei Baylon',
      'Paxpenh Perol',
      'Rayver Periña',
      'Joseph Llamera',
      'Mia Amor',
      'Mary Kristin Arcos',
      'Nilo Jae Mirandilla',
      'Daniel Zymon Arroco',
      'Mariam Felice Arroco',
      'Therese Mirandilla',
      'Riza Mae Mirandilla'
    ]
  }
};

var modal        = document.getElementById('names-modal');
var modalTitle   = document.getElementById('modal-title');
var modalLabel   = document.getElementById('modal-label');
var modalNames   = document.getElementById('modal-names');
var modalCloseBtn = document.getElementById('modal-close-btn');

function openModal(key) {
  var data = modalData[key];
  if (!data) return;
  modalLabel.textContent = 'Evening Program';
  modalTitle.textContent = data.label;
  modalNames.innerHTML = '';
  data.names.forEach(function(name, i) {
    var li = document.createElement('li');
    li.innerHTML = '<span class="modal-num">' + String(i + 1).padStart(2, '0') + '</span>' + name;
    modalNames.appendChild(li);
  });
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.timeline-clickable').forEach(function(el) {
  el.addEventListener('click', function() {
    openModal(el.getAttribute('data-modal'));
  });
});

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', function(e) {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});
