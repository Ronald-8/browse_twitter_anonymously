function destroyTwitterPopup() {
  const config = { attributes: true, subtree: true, childList: true, characterData: true };

  var observer0 = new MutationObserver((mutationsList) => {
    for(var mutation of mutationsList) {
      for (const node of mutation.addedNodes) {
        if (!node.tagName) continue; // not an element
        if (node.id == 'layers') {
          observer.observe(node, config);
          observer0.disconnect();
        }
      }
    }
  });

  var observer = new MutationObserver((mutationsList) => {
    for(var mutation of mutationsList) {
      for (const node of mutation.addedNodes) {
        if (!node.tagName) continue; // not an element
        if (node.classList == 'css-1dbjc4n r-aqfbo4 r-1d2f490 r-12vffkv r-1xcajam r-zchlnj r-ipm5af') {
          node.remove();
          document.documentElement.style.removeProperty("overflow");
          document.documentElement.style.overflowY = "scroll";
          observer.disconnect();
        }
      }
    }
  });

  observer0.observe(document, config);
}

destroyTwitterPopup();