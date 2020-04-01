const redirectUrl = "https://www.google.com"; // CHANGE
const trackFbLead = function() {
  var registryVal = window.localStorage.getItem(fbPixelId);
  // console.log(registryVal)
  var elapsed = registryVal ? Date.now() - registryVal : -1;
  // console.log(elapsed)

  if (elapsed > 0 && Math.floor(elapsed / 1000) < 10) {
    // console.log("fb lead already tracked")
    location.href = redirectUrl;
    return;
  } else {
    var img = new Image();
    img.onload = function() {
      window.localStorage.setItem(fbPixelId, Date.now());
      location.href = redirectUrl;
    };
    img.src = "https://www.facebook.com/tr?id=" + fbPixelId + "&ev=Lead";
  }
};

Array.from(document.querySelectorAll("[data-track]")).forEach((e) => {
  e.addEventListener("click", trackFbLead);
});
