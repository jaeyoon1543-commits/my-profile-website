const navLinks = [...document.querySelectorAll('.dock a')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
let scheduled = false;
function updateActiveSection() {
  const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 240);
  let active = sections[0];
  for (const section of sections) {
    if (section.offsetTop <= marker) active = section;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) active = sections.at(-1);
  for (const link of navLinks) {
    if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(updateActiveSection);
  }
}, { passive: true });
window.addEventListener('resize', updateActiveSection);
window.addEventListener('load', updateActiveSection);
updateActiveSection();

const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
let feedbackTimer;
copyButton.addEventListener('click', async () => {
  const email = document.querySelector('#email-link').getAttribute('href').slice(7);
  clearTimeout(feedbackTimer);
  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = '완료 ✓';
    copyStatus.textContent = '이메일 주소를 복사했습니다.';
    feedbackTimer = setTimeout(() => {
      copyButton.textContent = '복사';
      copyStatus.textContent = '';
    }, 2500);
  } catch {
    copyStatus.textContent = '자동 복사를 사용할 수 없습니다. 이메일 주소를 선택해 복사해 주세요.';
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#email-link span'));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
});
