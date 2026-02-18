(() => {
  // Replace with your real Google tag ID (e.g. G-ABC123XYZ).
  const GOOGLE_TAG_ID = 'G-XXXXXXXXXX';

  const isConfigured = GOOGLE_TAG_ID && !GOOGLE_TAG_ID.includes('XXXXXXXXXX');

  if (!isConfigured) {
    return;
  }

  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', GOOGLE_TAG_ID);
})();
