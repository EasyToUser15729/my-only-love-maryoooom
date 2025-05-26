// تشغيل الصوت عند الضغط على الزر
const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('playAudioBtn');

playBtn.addEventListener('click', () => {
  audio.currentTime = 14;  // بداية التشغيل من الثانية 2
  audio.play();
});

// إيقاف الصوت تلقائياً عند الوصول إلى الدقيقة 2 (120 ثانية)
audio.addEventListener('timeupdate', () => {
  if (audio.currentTime >= 124) {
    audio.pause();
  }
});

// تأثير التلاشي عند النزول بالصفحة (scroll fade-in)
const photos = document.querySelectorAll('.photo');

function checkVisibility() {
  const windowBottom = window.innerHeight + window.scrollY;

  photos.forEach(photo => {
    const photoTop = photo.offsetTop + 100; // زيادة 100 بيكسل قبل الظهور
    
    if (windowBottom >= photoTop) {
      photo.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
