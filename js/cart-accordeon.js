export const runAccordion = () => {
    const accordions = document.querySelectorAll('.accordion-cart');

    accordions.forEach(accordion => {
      const header = accordion.querySelector('.accordion-cart-header');
      const arrow = header.querySelector('.arrow');
      const content = accordion.querySelector('.accordion-cart-content');
  
      header.addEventListener('click', () => {
        accordion.classList.toggle('active');
        if (accordion.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0';
        }
        arrow.style.transform = accordion.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
      });
  
      accordion.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
      arrow.style.transform = 'rotate(180deg)';
    });
}

