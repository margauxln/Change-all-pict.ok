var img = document.getElementsByTagName("img");
console.log(img);


function loadImage() {
  chrome.storage.sync.get(['monImage'], function(result) {
    console.log('Value currently is ' + result.monImage);
    for(var i = 0; i < img.length ; i++) {
      img[i].src = result.monImage;
      img[i].srcset = result.monImage;
    }
  });
}

setInterval(loadImage,500);

