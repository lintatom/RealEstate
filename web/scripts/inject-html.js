(() => {
  function injectHtml(root = document) {
    const elements = root.getElementsByTagName("html-include");
    if (!elements || !elements.length) return;

    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      const parent = element.parentElement;
      const href = element.getAttribute("href");
      if (!href) return;

      fetch(href)
        .then(res => res.text())
        .then(html => {
          if (parent.contains(element)) {
            element.insertAdjacentHTML("afterend", html);
            element.remove();
            injectHtml(parent);
          }
        });
    }
  }

  injectHtml();
})();
