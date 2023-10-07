const accordionBtn = document.querySelectorAll('.faq-box');
const panel = document.querySelectorAll('.faq-sub-text');

  panel.forEach((element) => {
    element.setAttribute('data-height', element.scrollHeight);
  });

  for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", function () {
      const currentPanel = this.nextElementSibling;
      const currentPanelState = currentPanel.getAttribute('aria-expanded');

      panel.forEach((element) => {
        element.setAttribute('aria-expanded', 'false');

        if (element.previousElementSibling.classList.contains('active')) {
          element.previousElementSibling.classList.remove("active");
          element.style.height = '';
        }
      });

      if (currentPanelState === 'false'){
        currentPanel.setAttribute('aria-expanded', 'true');
        currentPanel.previousElementSibling.classList.add('active');
        currentPanel.style.height = currentPanel.getAttribute('data-height') + 'px';
      } else {
        currentPanel.setAttribute('aria-expanded', 'false');
        currentPanel.previousElementSibling.classList.remove('active');
        currentPanel.style.height = '';
      }
    });
  }


document.body.classList.remove('is-exiting')


