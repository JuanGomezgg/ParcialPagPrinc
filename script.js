function toggleMenu() {
    let menu = document.querySelector(".jcgg_nav");
    menu.classList.toggle("active");
}

function jcgg_ChangeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random().toFixed(2); // opacidad

  const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
  const header = document.getElementById('jcggHeader');

  header.style.backgroundColor = rgba;

  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  const textColor = luminance < 128 ? 'white' : 'black';

  header.style.color = textColor;

  const links = header.querySelectorAll('a');
  links.forEach(link => {
    link.style.color = textColor;
  });

  const icons = header.querySelectorAll('button');
  icons.forEach(btn => {
    btn.style.color = textColor;
  });
}