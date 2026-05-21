(function () {
  // Hamburger nav for narrow viewports. Pure JS, no deps.
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav-links');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.textContent = isOpen ? '✕' : '☰';
  });

  // Close the menu when a nav link is clicked (mobile behavior).
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '☰';
    }
  });
})();

(function () {
  // Lightbox: clicking any .screenshot-link opens its href as an in-page
  // overlay instead of navigating away, so users keep their context. The
  // anchor's href + target="_blank" still works as a fallback if JS
  // doesn't load. Press Esc, click the backdrop, or click the close
  // button to dismiss.
  var links = document.querySelectorAll('a.screenshot-link');
  if (!links.length) return;

  // Build the dialog once, attach to body
  var dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.innerHTML =
    '<button class="lightbox-close" aria-label="Close enlarged screenshot">×</button>' +
    '<img class="lightbox-img" src="" alt="">';
  document.body.appendChild(dialog);

  var img = dialog.querySelector('.lightbox-img');
  var closeBtn = dialog.querySelector('.lightbox-close');

  // Open on click
  Array.prototype.forEach.call(links, function (link) {
    link.addEventListener('click', function (e) {
      // Allow modifier-clicks (Ctrl/Cmd/middle) to use the default
      // behavior: open the image in a new tab.
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      img.src = link.href;
      var sourceImg = link.querySelector('img');
      img.alt = sourceImg ? sourceImg.alt : '';
      if (typeof dialog.showModal === 'function') {
        dialog.showModal();
      } else {
        // Old browsers without <dialog> support: fall back to opening
        // the file in a new tab via the original anchor behavior.
        window.open(link.href, '_blank', 'noopener');
      }
    });
  });

  // Close on close button
  closeBtn.addEventListener('click', function () { dialog.close(); });

  // Close when clicking the backdrop area (outside the image)
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) dialog.close();
  });

  // Click the image inside the lightbox to toggle native-resolution
  // zoom (useful for wide shots like the growth + Sheet composite that
  // shrink to fit the viewport otherwise. Dialog's overflow:auto handles
  // panning when the image is larger than the dialog.
  img.addEventListener('click', function (e) {
    e.stopPropagation();  // don't bubble to backdrop close
    img.classList.toggle('zoomed');
    if (img.classList.contains('zoomed')) {
      // Reset scroll so the user starts looking at the top-left corner
      // of the full-size image rather than wherever the dialog last was.
      dialog.scrollTop = 0;
      dialog.scrollLeft = 0;
    }
  });

  // Reset zoom state when the dialog closes so the next opening starts
  // fresh at fit-to-viewport.
  dialog.addEventListener('close', function () {
    img.classList.remove('zoomed');
  });
})();
