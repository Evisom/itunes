const redirectUrl = "https://www.google.com"; // CHANGE
const trackFbLead = () => {
  const PAGE_LEAD_KEY = fbPixelId + '_lead';
  const registryVal = window.localStorage.getItem(PAGE_LEAD_KEY);
  const elapsed = registryVal ? Date.now() - registryVal : -1;

  if (elapsed > 0 && Math.floor(elapsed / 1000) < 10) {
    location.href = redirectUrl;
    return;
  } else {
    const img = new Image();
    img.onload = function() {
      window.localStorage.setItem(PAGE_LEAD_KEY, Date.now());
      location.href = redirectUrl;
    };
    img.src = "https://www.facebook.com/tr?id=" + fbPixelId + "&ev=Lead";
  }
};

Array.from(document.querySelectorAll("[data-track]")).forEach((e) => {
  e.addEventListener("click", trackFbLead);
});

const track = () => {
  const PAGE_VIEW_KEY = fbPixelId + '_view';
  const registryVal = window.localStorage.getItem(PAGE_VIEW_KEY);
  const elapsed = registryVal ? Date.now() - registryVal : -1;
  
  if (elapsed < 0 || Math.floor(elapsed / 1000) > 10) {
    fbq('track', 'PageView');
    window.localStorage.setItem(PAGE_VIEW_KEY, Date.now());
  }
}

// -- init ---
fbq('init', fbPixelId);
track();