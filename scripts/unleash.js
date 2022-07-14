// Listen for messages on the content page
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'unleash') unleash();
  }
);
// Our image replacement script
function unleash() {
  document.querySelectorAll('img').forEach( (img) => {
    img.src = `https://source.unsplash.com/${img.width}x${img.height}/?dinosaurs&${Math.random()}`; //Set the new src et the size of the images
    img.srcset = img.src; //for mobile devices
  })
}