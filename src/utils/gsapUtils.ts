import gsap from 'gsap';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+';

export const scrambleText = (element: HTMLElement, finalLinkText: string, duration: number = 2) => {
  const originalText = finalLinkText;
  const length = originalText.length;
  
  const obj = { value: 0 };
  
  gsap.to(obj, {
    value: 1,
    duration: duration,
    ease: 'none',
    onUpdate: () => {
      const progress = obj.value;
      const visibleChars = Math.floor(progress * length);
      
      let currentText = '';
      for (let i = 0; i < length; i++) {
        if (i < visibleChars) {
          currentText += originalText[i];
        } else {
          currentText += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      element.innerText = currentText;
    },
    onComplete: () => {
      element.innerText = originalText;
    }
  });
};
