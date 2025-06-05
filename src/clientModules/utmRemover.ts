(function removeUTMParams() {
  if (typeof window === 'undefined') {
    return;
  }
  
  const url = new URL(window.location.href);
  const params = url.searchParams;
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  let modified = false;

  utmParams.forEach(param => {
    if (params.has(param)) {
      params.delete(param);
      modified = true;
    }
  });

  if (modified) {
    const newQuery = params.toString() ? '?' + params.toString() : '';
    const newUrl = url.pathname + newQuery + url.hash;
    window.history.replaceState({}, document.title, newUrl);
  }
})();
