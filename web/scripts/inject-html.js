(() => {
  function injectHtml(root = document) {
    const elements = root.getElementsByTagName("html-include");
    if (!elements || !elements.length) return;

    const promises = [];
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      const parent = element.parentElement;
      const href = element.getAttribute("href");
      if (!href) return;

      promises.push(
        fetch(href)
          .then(res => res.text())
          .then(html => {
            if (parent.contains(element)) {
              element.insertAdjacentHTML("afterend", html);
              element.remove();
              return injectHtml(parent);
            }
          })
      )
    }

    return Promise.all(promises)
  }

  injectHtml()
    .then(() => {
      if (window.onReady && window.onReady.length) {
        window.onReady.forEach(work => work && work())
      }
    })
})();
