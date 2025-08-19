// Dynamic cloud generation for holy background
window.addEventListener('DOMContentLoaded', () => {
  const sky = document.querySelector('.sky');
  const template = document.getElementById('cloud');
  if (!sky || !template) return;

  for (let i = 0; i < 25; i++) {
    const cloud = template.cloneNode(true);
    cloud.removeAttribute('id');
    const duration = Math.random() * 200 + 100;
    const delay = -Math.random() * duration;
    cloud.style.animation = `animateCloud ${duration}s linear infinite`;
    cloud.style.animationDelay = `${delay}s`;
    cloud.style.position = 'absolute';
    cloud.style.top = '0';
    sky.appendChild(cloud);

    const parts = cloud.querySelectorAll('.cloud-part');
    parts.forEach(part => {
      const width = Math.random() * 500 + 200;
      const height = Math.random() * 230 + 100;
      const top = Math.random() * 80 - 40;
      part.style.width = `${width}px`;
      part.style.height = `${height}px`;
      part.style.top = `${top}vh`;
      part.style.left = '-50vw';
      part.style.borderRadius = '50%';
      part.style.position = 'absolute';
    });
  }

  template.remove();
});
