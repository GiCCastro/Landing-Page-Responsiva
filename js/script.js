document.addEventListener('DOMContentLoaded', () => {
  const section1 = document.querySelector('.section-presentation');
  const section2 = document.querySelector('.section-testimony');
  const scrollIndicator = document.getElementById('scroll-indicator');

  if (!section1 || !section2 || !scrollIndicator) return;

  function toggleScrollIndicator() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1024) {
      if (section1.scrollHeight > section1.clientHeight || section2.scrollHeight > section2.clientHeight) {
        scrollIndicator.style.display = 'block';
        section1.style.overflowY = 'auto'; 
        section2.style.overflowY = 'auto';
      } else {
        scrollIndicator.style.display = 'none';
        section1.style.overflowY = 'hidden'; 
        section2.style.overflowY = 'hidden';
      }
    } else {
      scrollIndicator.style.display = 'none';
      section1.style.overflowY = 'hidden'; 
      section2.style.overflowY = 'hidden';
    }
  }

  toggleScrollIndicator();

  const resizeObserver1 = new ResizeObserver(toggleScrollIndicator);
  const resizeObserver2 = new ResizeObserver(toggleScrollIndicator);
  resizeObserver1.observe(section1);
  resizeObserver2.observe(section2);

  window.addEventListener('resize', toggleScrollIndicator);
});
