setTimeout(() => {
  const nav = document.getElementById('mainNav');
  const welcome = document.getElementById('welcomeMsg');
  nav.style.display = 'flex';
  setTimeout(() => nav.classList.add('show'), 10);
  welcome.style.display = 'block';
  setTimeout(() => welcome.classList.add('show'), 10);
}, 4000);
