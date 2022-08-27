console.log('loaded');
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    // Deactivate all tabs
    tabs.forEach((t) => {
      t.children[0].classList.remove(
        'border-softRed',
        'border-b-4',
        'md:border-b-0'
      );
    });

    // Hide all panels
    panels.forEach((panel) => {
      panel.classList.add('hidden');
    });

    // Activate a new tab and panel based on that target.
    e.target.classList.add('border-softRed', 'border-b-4');
    const classString = e.target.getAttribute('data-target');
    document.getElementsByClassName(classString)[0].classList.remove('hidden');
  });
});

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');
menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('opened');
  menu.classList.toggle('hidden');

  if (!menu.classList.contains('hidden')) {
    logo.setAttribute('src', 'images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', 'images/logo-bookmark.svg');
  }
});
