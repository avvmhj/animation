document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
      header.addEventListener('click', function () {
          const accordionItem = this.parentElement;
          const accordionContent = accordionItem.querySelector('.accordion-content');

          if (accordionContent.style.display === 'block') {
              accordionContent.style.display = 'none';
          } else {
              closeAllAccordionItems();
              accordionContent.style.display = 'block';
          }
      });
  });

  function closeAllAccordionItems() {
      const accordionContents = document.querySelectorAll('.accordion-content');
      accordionContents.forEach(content => {
          content.style.display = 'none';
      });
  }
});
